import { useEffect, useRef, useState } from "react";

const interviewQuestions = [
  "Tell me about yourself.",
  "Explain one important project you have worked on.",
  "What are your strengths as a developer?",
  "Why should we hire you for this role?",
  "Where do you see yourself in the next 3 years?",
];

const VideoInterview = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);
  const chunksRef = useRef([]);
  const recordingSecondsRef = useRef(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [cameraStream, setCameraStream] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [audioOnlyMode, setAudioOnlyMode] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const [recording, setRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [recordedAnswers, setRecordedAnswers] = useState({});

  // Attach camera stream to video element
  useEffect(() => {
    if (cameraStarted && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStarted, cameraStream]);

  // Cleanup camera/mic when component closes
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [cameraStream]);

  // ================= START CAMERA / MICROPHONE =================

  const startCamera = async () => {
    try {
      // Try camera + microphone first
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setCameraStream(stream);
      setCameraStarted(true);
      setAudioOnlyMode(false);
      setDemoMode(false);
      setStarted(true);
    } catch (videoError) {
      console.log("Camera unavailable. Trying microphone only...");

      try {
        // If camera is unavailable, try microphone only
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        setCameraStream(audioStream);
        setCameraStarted(false);
        setAudioOnlyMode(true);
        setDemoMode(false);
        setStarted(true);
      } catch (audioError) {
        console.error("Microphone Error:", audioError);

        // No camera + no microphone
        setCameraStream(null);
        setCameraStarted(false);
        setAudioOnlyMode(false);
        setDemoMode(true);
        setStarted(true);
      }
    }
  };

  // ================= START RECORDING =================

  const startRecording = () => {
    setRecordingSeconds(0);
    recordingSecondsRef.current = 0;
    chunksRef.current = [];

    // Demo mode
    if (!cameraStream) {
      setRecording(true);

      timerRef.current = setInterval(() => {
        recordingSecondsRef.current += 1;
        setRecordingSeconds(recordingSecondsRef.current);
      }, 1000);

      return;
    }

    try {
      const recorder = new MediaRecorder(cameraStream);

      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const hasVideo = cameraStream.getVideoTracks().length > 0;

        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || (hasVideo ? "video/webm" : "audio/webm"),
        });

        const recordingUrl = URL.createObjectURL(blob);

        setRecordedAnswers((prev) => ({
          ...prev,
          [currentQuestion]: {
            recorded: true,
            duration: recordingSecondsRef.current,
            url: recordingUrl,
            type: hasVideo ? "video" : "audio",
            demo: false,
          },
        }));

        mediaRecorderRef.current = null;
      };

      recorder.start();

      setRecording(true);

      timerRef.current = setInterval(() => {
        recordingSecondsRef.current += 1;
        setRecordingSeconds(recordingSecondsRef.current);
      }, 1000);
    } catch (error) {
      console.error("Recording Error:", error);
      alert("Recording start nahi ho paayi.");
    }
  };

  // ================= STOP RECORDING =================

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Demo mode
    if (!mediaRecorderRef.current) {
      setRecording(false);

      setRecordedAnswers((prev) => ({
        ...prev,
        [currentQuestion]: {
          recorded: true,
          duration: recordingSecondsRef.current,
          demo: true,
        },
      }));

      return;
    }

    mediaRecorderRef.current.stop();
    setRecording(false);
  };


  const deleteRecording = (questionIndex) => {
  const recording = recordedAnswers[questionIndex];

  if (recording?.url) {
    URL.revokeObjectURL(recording.url);
  }

  setRecordedAnswers((prev) => {
    const updated = { ...prev };
    delete updated[questionIndex];
    return updated;
  });

  setRecordingSeconds(0);
  recordingSecondsRef.current = 0;
};

  // ================= NEXT QUESTION =================

  const handleNext = () => {
    if (recording) {
      stopRecording();
    }

    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setRecordingSeconds(0);
      recordingSecondsRef.current = 0;
    } else {
      setCompleted(true);

      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }

      setCameraStarted(false);
    }
  };

  // ================= START AGAIN =================

  const handleStartAgain = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setCurrentQuestion(0);
    setStarted(false);
    setCompleted(false);
    setCameraStarted(false);
    setAudioOnlyMode(false);
    setDemoMode(false);
    setRecording(false);
    setRecordingSeconds(0);
    recordingSecondsRef.current = 0;
    setRecordedAnswers({});
    setCameraStream(null);
  };

  // ================= FORMAT TIME =================

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const secs = (seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${secs}`;
  };

  // ================= COMPLETED SCREEN =================

  if (completed) {
    return (
      <div className="w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 text-center">
          <div className="text-6xl mb-5">✅</div>

          <h1 className="text-3xl font-extrabold text-slate-800">
            Video Interview Completed
          </h1>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Your interview session has been completed successfully.
          </p>

          <p className="text-sm text-slate-400 mt-4">
            Recorded responses: {Object.keys(recordedAnswers).length}
          </p>

          <button
            onClick={handleStartAgain}
            className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition"
          >
            Start Again
          </button>
        </div>
      </div>
    );
  }

  // ================= MAIN UI =================

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        <h1 className="text-3xl font-extrabold text-slate-800">
          🎥 Video Interview
        </h1>

        <p className="text-slate-500 mt-2">
          Practice your interview skills through a structured video interview
          session.
        </p>

        {!started ? (
          <>
            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-800">
                  📋 Interview Process
                </h2>

                <div className="mt-5 space-y-4 text-slate-600">
                  <p>1️⃣ Read the interview question.</p>
                  <p>2️⃣ Prepare your answer.</p>
                  <p>3️⃣ Record your response.</p>
                  <p>4️⃣ Move to the next question.</p>
                  <p>5️⃣ Complete the interview.</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl min-h-[280px] flex flex-col items-center justify-center text-white">
                <div className="text-6xl mb-4">📷</div>

                <h2 className="text-xl font-bold">
                  Camera & Microphone
                </h2>

                <p className="text-slate-300 text-sm mt-2 text-center px-6">
                  Camera/microphone access will start when you begin the
                  interview.
                </p>
              </div>
            </div>

            <button
              onClick={startCamera}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl py-4 font-bold text-lg transition"
            >
              🚀 Start Video Interview
            </button>
          </>
        ) : (
          <>
            {/* Progress */}
            <div className="mt-8">
              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-2">
                <span>
                  Question {currentQuestion + 1} of{" "}
                  {interviewQuestions.length}
                </span>

                <span>
                  {Math.round(
                    ((currentQuestion + 1) / interviewQuestions.length) * 100
                  )}
                  %
                </span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / interviewQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

           

            {audioOnlyMode && (
              <div className="mt-5 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl p-4 font-semibold">
                🎤 Audio Mode: Camera available nahi hai, microphone recording
                active hai.
              </div>
            )}

            {/* Question + Media */}
            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <p className="text-sm font-semibold text-blue-600">
                  INTERVIEW QUESTION
                </p>

                <h2 className="text-2xl font-bold text-slate-800 mt-4 leading-relaxed">
                  {interviewQuestions[currentQuestion]}
                </h2>

                <div className="mt-8 bg-white rounded-xl p-4 border border-blue-100">
                  <p className="text-sm text-slate-500">
                    💡 Keep your answer clear, concise and relevant to the
                    question.
                  </p>
                </div>
              </div>

              {/* Media Preview */}
              <div className="bg-slate-900 rounded-2xl min-h-[320px] overflow-hidden relative">
                {cameraStarted ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full min-h-[320px] object-cover"
                  />
                ) : audioOnlyMode ? (
                  <div className="h-[320px] flex flex-col items-center justify-center text-white">
                    <div className="text-7xl">🎤</div>

                    <p className="mt-4 text-xl font-bold">
                      Audio Interview Mode
                    </p>

                    <p className="text-slate-400 text-sm mt-2">
                      Camera unavailable — microphone recording active
                    </p>
                  </div>
                ) : (
                  <div className="h-[320px] flex flex-col items-center justify-center text-white">
                    <div className="text-6xl">🎥</div>

                    <p className="mt-4 font-bold">
                      Demo Interview Mode
                    </p>

                    <p className="text-slate-400 text-sm mt-2">
                      Camera/Microphone unavailable
                    </p>
                  </div>
                )}

                {recording && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    🔴 REC {formatTime(recordingSeconds)}
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {!recording ? (
                <button
                  onClick={startRecording}
                  className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold transition"
                >
                  🔴 Start Recording
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-2xl font-bold transition"
                >
                  ⏹️ Stop Recording
                </button>
              )}

              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition"
              >
                {currentQuestion === interviewQuestions.length - 1
                  ? "✅ Complete Interview"
                  : "➡️ Next Question"}
              </button>
            </div>

            {/* Recorded Answer */}
            {recordedAnswers[currentQuestion]?.recorded && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
                <p className="font-bold text-green-700">
                  ✅ Answer Recorded
                </p>

                <p className="text-sm text-green-600 mt-1">
                  Duration:{" "}
                  {formatTime(
                    recordedAnswers[currentQuestion].duration
                  )}
                </p>

                {recordedAnswers[currentQuestion].demo && (
                  <p className="text-xs text-orange-600 mt-2">
                    Demo recording: actual recording device available nahi
                    tha.
                  </p>
                )}

                {/* Playback */}
                {recordedAnswers[currentQuestion].url && (
                  <div className="mt-4">
                    {recordedAnswers[currentQuestion].type === "video" ? (
                      <video
                        src={recordedAnswers[currentQuestion].url}
                        controls
                        className="w-full rounded-xl"
                      />
                    ) : (
                      <audio
                        src={recordedAnswers[currentQuestion].url}
                        controls
                        className="w-full"
                      />
                    )}
                  </div>
                )}

                <button
  onClick={() => deleteRecording(currentQuestion)}
  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-bold transition"
>
  🗑️ Delete Recording
</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoInterview;