import React from "react";

import QuizCard from "./QuizCard";

const LearningResourceCard = ({ resource }) => {
    if (!resource) return null;

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-5">

            {/* Skill Header */}
            <div className="flex items-center justify-between mb-4">

                <h3 className="text-xl font-bold text-gray-800">
                    📚 {resource.skill}
                </h3>

                {resource.difficulty && (
                    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 font-medium">
                        ⭐ {resource.difficulty}
                    </span>
                )}

            </div>

            {/* Duration */}
            {resource.duration && (
                <p className="text-sm text-gray-500 mb-4">
                    ⏱ Duration: {resource.duration}
                </p>
            )}

            {/* Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                {/* YouTube Course */}
                {resource.youtube && (
    <a
        href={resource.youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 transition block"
    >
        <h4 className="font-semibold text-red-600">
            🎥 {resource.youtube.title || "YouTube Course"}
        </h4>

        <p className="text-sm text-gray-600 mt-1">
            Watch the course and learn this skill.
        </p>
    </a>
)}

                {/* Official Documentation */}
                {resource.documentation && (
                    <a
                        href={resource.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition block"
                    >
                        <h4 className="font-semibold text-blue-600">
                            📘 Official Documentation
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                            Learn from the official documentation.
                        </p>

                        <p className="text-xs text-blue-500 mt-2">
                            Open documentation →
                        </p>
                    </a>
                )}

                {/* Practice Project */}
                {resource.practiceProject && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                        <h4 className="font-semibold text-green-600">
                            💻 Practice Project
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                            {resource.practiceProject}
                        </p>
                    </div>
                 )}

                 {/* Quiz */}
                

                 <QuizCard skill={resource.skill} />

                {/* Notes */}
                {resource.notes && (
                    <a
                        href={resource.notes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition block"
                    >
                        <h4 className="font-semibold text-gray-700">
                            📄 Notes
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                            Read additional learning notes.
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                            Open notes →
                        </p>
                    </a>
                )}

            </div>

        </div>
    );
};

export default LearningResourceCard;