import React, { useState } from "react";

const QuizCard = ({ skill }) => {
    const quizQuestions = {
    "Express.js": [
    {
        question: "What is Express.js?",
        options: [
            "A database",
            "A Node.js web framework",
            "A programming language",
            "An operating system"
        ],
        answer: "A Node.js web framework"
    },
    {
        question: "Which command installs Express.js?",
        options: [
            "npm install express",
            "npm install react",
            "npm install mongodb",
            "npm install node"
        ],
        answer: "npm install express"
    },
    {
        question: "Which method is commonly used to create a GET route in Express?",
        options: [
            "app.get()",
            "app.fetch()",
            "app.routeGet()",
            "app.request()"
        ],
        answer: "app.get()"
    },
    {
        question: "Which object is used to create a router in Express?",
        options: [
            "express.Router()",
            "express.Database()",
            "express.Route()",
            "express.Server()"
        ],
        answer: "express.Router()"
    },
    {
        question: "What does middleware do in Express?",
        options: [
            "Processes requests between request and response",
            "Creates MongoDB databases",
            "Compiles JavaScript",
            "Designs web pages"
        ],
        answer: "Processes requests between request and response"
    },
    {
        question: "Which object contains information about the incoming HTTP request?",
        options: [
            "req",
            "res",
            "app",
            "server"
        ],
        answer: "req"
    },
    {
        question: "Which object is commonly used to send a response to the client?",
        options: [
            "req",
            "res",
            "app",
            "router"
        ],
        answer: "res"
    },
    {
        question: "Which method sends a JSON response in Express?",
        options: [
            "res.json()",
            "res.sendJSON()",
            "res.data()",
            "res.object()"
        ],
        answer: "res.json()"
    },
    {
        question: "Which HTTP status code means 'Not Found'?",
        options: [
            "200",
            "201",
            "404",
            "500"
        ],
        answer: "404"
    },
    {
        question: "Which middleware is commonly used to parse JSON request bodies?",
        options: [
            "express.json()",
            "express.body()",
            "express.parse()",
            "express.requestJSON()"
        ],
        answer: "express.json()"
    }
],

    "MongoDB": [
    {
        question: "What type of database is MongoDB?",
        options: [
            "Relational database",
            "Document database",
            "Graph database",
            "Spreadsheet database"
        ],
        answer: "Document database"
    },
    {
        question: "Which format is commonly associated with MongoDB documents?",
        options: [
            "BSON",
            "HTML",
            "CSS",
            "CSV only"
        ],
        answer: "BSON"
    },
    {
        question: "Which method inserts one document into a MongoDB collection?",
        options: [
            "insertOne()",
            "insertRow()",
            "addOne()",
            "createDocument()"
        ],
        answer: "insertOne()"
    },
    {
        question: "Which method finds documents in a MongoDB collection?",
        options: [
            "find()",
            "search()",
            "select()",
            "getRows()"
        ],
        answer: "find()"
    },
    {
        question: "What is a collection in MongoDB?",
        options: [
            "A group of documents",
            "A single field",
            "A database server",
            "A JavaScript function"
        ],
        answer: "A group of documents"
    },
    {
        question: "What is a document in MongoDB?",
        options: [
            "A record stored as BSON",
            "A database server",
            "A SQL table",
            "A JavaScript file"
        ],
        answer: "A record stored as BSON"
    },
    {
        question: "Which field is commonly used as the unique identifier of a MongoDB document?",
        options: [
            "_id",
            "idNumber",
            "uniqueKey",
            "primary"
        ],
        answer: "_id"
    },
    {
        question: "Which method updates one MongoDB document?",
        options: [
            "updateOne()",
            "changeOne()",
            "modifyRow()",
            "editDocument()"
        ],
        answer: "updateOne()"
    },
    {
        question: "Which method deletes one MongoDB document?",
        options: [
            "deleteOne()",
            "removeRow()",
            "deleteRow()",
            "dropOne()"
        ],
        answer: "deleteOne()"
    },
    {
        question: "Which operator is commonly used to find documents where a field is greater than a value?",
        options: [
            "$gt",
            "$greater",
            "$more",
            "$above"
        ],
        answer: "$gt"
    }
],

        "JWT": [
    {
        question: "What does JWT stand for?",
        options: [
            "Java Web Token",
            "JSON Web Token",
            "JavaScript Web Transfer",
            "JSON Web Transfer"
        ],
        answer: "JSON Web Token"
    },
    {
        question: "What is JWT commonly used for?",
        options: [
            "Authentication and authorization",
            "Image editing",
            "Database backup",
            "CSS styling"
        ],
        answer: "Authentication and authorization"
    },
    {
        question: "Which HTTP header commonly carries a Bearer JWT?",
        options: [
            "Content-Type",
            "Authorization",
            "Accept",
            "Cache-Control"
        ],
        answer: "Authorization"
    },
    {
        question: "How many main parts does a typical JWT contain?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: "3"
    },
    {
        question: "Which three parts make up a JWT?",
        options: [
            "Header, Payload, Signature",
            "Header, Body, Database",
            "Username, Password, Token",
            "Request, Response, Server"
        ],
        answer: "Header, Payload, Signature"
    },
    {
        question: "What does the JWT payload typically contain?",
        options: [
            "Claims",
            "CSS styles",
            "Database tables",
            "Server code"
        ],
        answer: "Claims"
    },
    {
        question: "What is the purpose of the JWT signature?",
        options: [
            "To verify the token has not been altered",
            "To store the user's password",
            "To create a database",
            "To encrypt every claim"
        ],
        answer: "To verify the token has not been altered"
    },
    {
        question: "Which HTTP status code is commonly returned when authentication credentials are invalid?",
        options: [
            "200",
            "201",
            "401",
            "301"
        ],
        answer: "401"
    },
    {
        question: "Where should a JWT secret key generally be kept?",
        options: [
            "Inside the public frontend code",
            "Inside an environment variable or secure secret store",
            "Inside the JWT payload",
            "Inside the user's browser URL"
        ],
        answer: "Inside an environment variable or secure secret store"
    },
    {
        question: "Which statement about a normal signed JWT payload is correct?",
        options: [
            "It should not contain sensitive secrets because signing does not make it confidential",
            "It is always encrypted",
            "It must contain the user's password",
            "It cannot contain user claims"
        ],
        answer: "It should not contain sensitive secrets because signing does not make it confidential"
    }
],
    

        "REST API": [
        {
            question: "What does REST stand for?",
            options: [
                "Representational State Transfer",
                "Remote Execution State Transfer",
                "Resource Execution Standard Technology",
                "Representational Server Transfer"
            ],
            answer: "Representational State Transfer"
        },
        {
            question: "Which HTTP method is commonly used to retrieve data?",
            options: [
                "POST",
                "GET",
                "DELETE",
                "PATCH"
            ],
            answer: "GET"
        },
        {
            question: "Which HTTP method is commonly used to create a new resource?",
            options: [
                "GET",
                "PUT",
                "POST",
                "DELETE"
            ],
            answer: "POST"
        },
        {
            question: "Which HTTP status code means a request was successful?",
            options: [
                "200",
                "404",
                "500",
                "401"
            ],
            answer: "200"
        },
        {
            question: "Which HTTP status code means 'Not Found'?",
            options: [
                "200",
                "201",
                "404",
                "301"
            ],
            answer: "404"
        },
        {
            question: "Which HTTP method is commonly used to remove a resource?",
            options: [
                "GET",
                "POST",
                "DELETE",
                "OPTIONS"
            ],
            answer: "DELETE"
        },
        {
            question: "Which HTTP method is commonly used to completely replace an existing resource?",
            options: [
                "PUT",
                "GET",
                "POST",
                "HEAD"
            ],
            answer: "PUT"
        },
        {
            question: "What does an API endpoint identify?",
            options: [
                "A specific resource or operation available through an API",
                "Only the database password",
                "Only the frontend design",
                "The operating system"
            ],
            answer: "A specific resource or operation available through an API"
        },
        {
            question: "Which format is commonly used for REST API data exchange?",
            options: [
                "JSON",
                "CSS",
                "JPEG",
                "MP3"
            ],
            answer: "JSON"
        },
        {
            question: "What does HTTP status code 201 commonly indicate?",
            options: [
                "Created",
                "Unauthorized",
                "Not Found",
                "Server Error"
            ],
            answer: "Created"
        }
    ],
     
    "Python": [
    {
        question: "Which keyword is used to define a function in Python?",
        options: [
            "function",
            "def",
            "func",
            "define"
        ],
        answer: "def"
    },
    {
        question: "Which of the following is used to create a list in Python?",
        options: [
            "()",
            "{}",
            "[]",
            "<>"
        ],
        answer: "[]"
    },
    {
        question: "Which function is used to display output in Python?",
        options: [
            "echo()",
            "print()",
            "display()",
            "output()"
        ],
        answer: "print()"
    },
    {
        question: "Which data type is used to store True or False?",
        options: [
            "String",
            "Integer",
            "Boolean",
            "Float"
        ],
        answer: "Boolean"
    },
    {
        question: "Which symbol is used for a single-line comment in Python?",
        options: [
            "//",
            "/*",
            "#",
            "--"
        ],
        answer: "#"
    },
    {
        question: "Which method adds an item to the end of a Python list?",
        options: [
            "add()",
            "insertEnd()",
            "append()",
            "push()"
        ],
        answer: "append()"
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: [
            "^",
            "**",
            "//",
            "%%"
        ],
        answer: "**"
    },
    {
        question: "Which keyword is used to create a class in Python?",
        options: [
            "object",
            "class",
            "struct",
            "define"
        ],
        answer: "class"
    },
    {
        question: "What is the correct file extension for a Python file?",
        options: [
            ".python",
            ".pt",
            ".py",
            ".p"
        ],
        answer: ".py"
    },
    {
        question: "Which function returns the number of items in an object?",
        options: [
            "count()",
            "size()",
            "length()",
            "len()"
        ],
        answer: "len()"
    }
],

    "Machine Learning": [
    {
        question: "What is Machine Learning?",
        options: [
            "A method where computers learn patterns from data",
            "A programming language",
            "A database system",
            "A web browser"
        ],
        answer: "A method where computers learn patterns from data"
    },
    {
        question: "Which type of Machine Learning uses labeled training data?",
        options: [
            "Unsupervised Learning",
            "Supervised Learning",
            "Reinforcement Learning",
            "Random Learning"
        ],
        answer: "Supervised Learning"
    },
    {
        question: "Which algorithm is commonly used for classification?",
        options: [
            "Linear Regression",
            "Logistic Regression",
            "K-Means only",
            "PCA"
        ],
        answer: "Logistic Regression"
    },
    {
        question: "What is the purpose of a training dataset?",
        options: [
            "To train the model to learn patterns",
            "To delete the model",
            "To design the UI",
            "To store passwords"
        ],
        answer: "To train the model to learn patterns"
    },
    {
        question: "What does overfitting mean?",
        options: [
            "The model performs well on training data but poorly on unseen data",
            "The model has no data",
            "The model always gives the same answer",
            "The model is too small to run"
        ],
        answer: "The model performs well on training data but poorly on unseen data"
    },
    {
        question: "Which metric is commonly used for classification accuracy?",
        options: [
            "Accuracy",
            "Mean Squared Error only",
            "R-squared only",
            "Variance"
        ],
        answer: "Accuracy"
    },
    {
        question: "Which algorithm is commonly used for clustering?",
        options: [
            "K-Means",
            "Linear Regression",
            "Logistic Regression",
            "Naive Bayes"
        ],
        answer: "K-Means"
    },
    {
        question: "Why is a test dataset used?",
        options: [
            "To evaluate the model on unseen data",
            "To train the model twice",
            "To create a database",
            "To write Python code"
        ],
        answer: "To evaluate the model on unseen data"
    },
    {
        question: "What is a feature in Machine Learning?",
        options: [
            "An input variable used by a model",
            "The final prediction only",
            "A database password",
            "A programming language"
        ],
        answer: "An input variable used by a model"
    },
    {
        question: "Which library is widely used for Machine Learning in Python?",
        options: [
            "Scikit-learn",
            "Express.js",
            "React",
            "Mongoose"
        ],
        answer: "Scikit-learn"
    }
],

"Deep Learning": [
    {
        question: "What is Deep Learning?",
        options: [
            "A subset of Machine Learning that uses neural networks",
            "A database management system",
            "A web development framework",
            "A version control system"
        ],
        answer: "A subset of Machine Learning that uses neural networks"
    },
    {
        question: "What is the basic building block of a neural network?",
        options: [
            "Neuron",
            "Database",
            "Router",
            "Compiler"
        ],
        answer: "Neuron"
    },
    {
        question: "Which type of neural network is commonly used for image processing?",
        options: [
            "CNN",
            "RNN",
            "Linear Regression",
            "K-Means"
        ],
        answer: "CNN"
    },
    {
        question: "Which neural network is commonly used for sequential data?",
        options: [
            "CNN",
            "RNN",
            "Decision Tree",
            "K-Means"
        ],
        answer: "RNN"
    },
    {
        question: "What is an epoch in Deep Learning?",
        options: [
            "One complete pass through the training dataset",
            "A type of neural network",
            "A database table",
            "A programming language"
        ],
        answer: "One complete pass through the training dataset"
    },
    {
        question: "What is the purpose of an activation function?",
        options: [
            "To introduce non-linearity into a neural network",
            "To store training data",
            "To create a database",
            "To connect to the internet"
        ],
        answer: "To introduce non-linearity into a neural network"
    },
    {
        question: "Which activation function is commonly used in hidden layers?",
        options: [
            "ReLU",
            "HTML",
            "SQL",
            "JSON"
        ],
        answer: "ReLU"
    },
    {
        question: "What is backpropagation used for?",
        options: [
            "Updating neural network weights using errors",
            "Creating HTML pages",
            "Managing databases",
            "Sending HTTP requests"
        ],
        answer: "Updating neural network weights using errors"
    },
    {
        question: "What does a loss function measure?",
        options: [
            "The difference between predicted and actual values",
            "The number of files in a project",
            "Internet speed",
            "Database size"
        ],
        answer: "The difference between predicted and actual values"
    },
    {
        question: "Which library is widely used for Deep Learning?",
        options: [
            "TensorFlow",
            "Express.js",
            "Mongoose",
            "React Router"
        ],
        answer: "TensorFlow"
    }
],

"TensorFlow": [
    {
        question: "What is TensorFlow?",
        options: [
            "An open-source machine learning framework",
            "A web browser",
            "A database",
            "A CSS framework"
        ],
        answer: "An open-source machine learning framework"
    },
    {
        question: "Which organization originally developed TensorFlow?",
        options: [
            "Google",
            "Microsoft",
            "Amazon",
            "Meta"
        ],
        answer: "Google"
    },
    {
        question: "What is a Tensor in TensorFlow?",
        options: [
            "A multidimensional array",
            "A web page",
            "A database table",
            "A text editor"
        ],
        answer: "A multidimensional array"
    },
    {
        question: "Which language is most commonly used with TensorFlow?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "SQL"
        ],
        answer: "Python"
    },
    {
        question: "Which API is commonly used to build models in TensorFlow?",
        options: [
            "Keras",
            "Express",
            "Mongoose",
            "React"
        ],
        answer: "Keras"
    },
    {
        question: "What is a TensorFlow model used for?",
        options: [
            "Learning patterns from data to make predictions",
            "Creating CSS styles",
            "Managing web routes",
            "Storing passwords"
        ],
        answer: "Learning patterns from data to make predictions"
    },
    {
        question: "Which function is commonly used to create a constant tensor?",
        options: [
            "tf.constant()",
            "tf.tensorCreate()",
            "tf.make()",
            "tf.array()"
        ],
        answer: "tf.constant()"
    },
    {
        question: "What is the purpose of an optimizer in TensorFlow?",
        options: [
            "To update model parameters during training",
            "To create HTML pages",
            "To store images",
            "To connect to MongoDB"
        ],
        answer: "To update model parameters during training"
    },
    {
        question: "Which method is commonly used to train a Keras model?",
        options: [
            "fit()",
            "trainModel()",
            "learn()",
            "execute()"
        ],
        answer: "fit()"
    },
    {
        question: "Which method is commonly used to make predictions with a trained Keras model?",
        options: [
            "predict()",
            "forecast()",
            "output()",
            "guess()"
        ],
        answer: "predict()"
    }
],
    
     "PyTorch": [
    {
        question: "What is PyTorch?",
        options: [
            "An open-source machine learning framework",
            "A database system",
            "A web browser",
            "A CSS library"
        ],
        answer: "An open-source machine learning framework"
    },
    {
        question: "Which programming language is most commonly used with PyTorch?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "SQL"
        ],
        answer: "Python"
    },
    {
        question: "What is a tensor in PyTorch?",
        options: [
            "A multidimensional array",
            "A web component",
            "A database table",
            "A text file"
        ],
        answer: "A multidimensional array"
    },
    {
        question: "Which module is commonly used to build neural networks in PyTorch?",
        options: [
            "torch.nn",
            "torch.web",
            "torch.html",
            "torch.database"
        ],
        answer: "torch.nn"
    },
    {
        question: "Which function is commonly used to create a tensor from existing data?",
        options: [
            "torch.tensor()",
            "torch.create()",
            "torch.arrayCreate()",
            "torch.data()"
        ],
        answer: "torch.tensor()"
    },
    {
        question: "What is autograd used for in PyTorch?",
        options: [
            "Automatic differentiation",
            "Database management",
            "Web routing",
            "File compression"
        ],
        answer: "Automatic differentiation"
    },
    {
        question: "Which method is commonly used to calculate predictions from a model?",
        options: [
            "model()",
            "model.predictOnly()",
            "model.outputData()",
            "model.guess()"
        ],
        answer: "model()"
    },
    {
        question: "Which optimizer is commonly available in torch.optim?",
        options: [
            "Adam",
            "Express",
            "MongoDB",
            "React"
        ],
        answer: "Adam"
    },
    {
        question: "What is the purpose of loss.backward() in PyTorch?",
        options: [
            "To compute gradients",
            "To save a model as HTML",
            "To create a database",
            "To start a web server"
        ],
        answer: "To compute gradients"
    },
    {
        question: "Which package is commonly used for datasets and data loading in PyTorch?",
        options: [
            "torch.utils.data",
            "torch.web.data",
            "torch.database",
            "torch.filesystem"
        ],
        answer: "torch.utils.data"
    }
],
    
    "Pandas": [
    {
        question: "What is Pandas mainly used for?",
        options: [
            "Data manipulation and analysis",
            "Web page design",
            "Video editing",
            "Operating system development"
        ],
        answer: "Data manipulation and analysis"
    },
    {
        question: "Which Python library is Pandas commonly used with?",
        options: [
            "NumPy",
            "Express.js",
            "React",
            "Mongoose"
        ],
        answer: "NumPy"
    },
    {
        question: "What is a Pandas DataFrame?",
        options: [
            "A two-dimensional labeled data structure",
            "A Python function",
            "A web server",
            "A database engine"
        ],
        answer: "A two-dimensional labeled data structure"
    },
    {
        question: "Which function is commonly used to read a CSV file in Pandas?",
        options: [
            "pd.read_csv()",
            "pd.open_csv()",
            "pd.load_csv()",
            "pd.csv_read()"
        ],
        answer: "pd.read_csv()"
    },
    {
        question: "Which Pandas object is one-dimensional?",
        options: [
            "Series",
            "DataFrame",
            "Table",
            "Matrix"
        ],
        answer: "Series"
    },
    {
        question: "Which method displays the first few rows of a DataFrame?",
        options: [
            "head()",
            "first()",
            "top()",
            "start()"
        ],
        answer: "head()"
    },
    {
        question: "Which method displays the last few rows of a DataFrame?",
        options: [
            "tail()",
            "last()",
            "bottom()",
            "end()"
        ],
        answer: "tail()"
    },
    {
        question: "Which method is commonly used to remove missing values?",
        options: [
            "dropna()",
            "removeNull()",
            "deleteNA()",
            "clearMissing()"
        ],
        answer: "dropna()"
    },
    {
        question: "Which method is commonly used to fill missing values?",
        options: [
            "fillna()",
            "replaceMissing()",
            "insertNA()",
            "addna()"
        ],
        answer: "fillna()"
    },
    {
        question: "Which command is commonly used to get basic statistical information about a DataFrame?",
        options: [
            "describe()",
            "statistics()",
            "summaryData()",
            "statsOnly()"
        ],
        answer: "describe()"
    }
],

    "NumPy": [
    {
        question: "What is NumPy mainly used for?",
        options: [
            "Numerical computing in Python",
            "Web development",
            "Database management",
            "Video editing"
        ],
        answer: "Numerical computing in Python"
    },
    {
        question: "What is the main data structure provided by NumPy?",
        options: [
            "ndarray",
            "DataFrame",
            "ListView",
            "HashMap"
        ],
        answer: "ndarray"
    },
    {
        question: "How is NumPy commonly imported?",
        options: [
            "import numpy as np",
            "import numpy as py",
            "include numpy",
            "using numpy"
        ],
        answer: "import numpy as np"
    },
    {
        question: "Which function creates a NumPy array?",
        options: [
            "np.array()",
            "np.createArray()",
            "np.make()",
            "np.list()"
        ],
        answer: "np.array()"
    },
    {
        question: "Which attribute gives the shape of a NumPy array?",
        options: [
            "shape",
            "sizeOf",
            "length",
            "dimension"
        ],
        answer: "shape"
    },
    {
        question: "Which attribute returns the total number of elements in a NumPy array?",
        options: [
            "size",
            "length",
            "count",
            "total"
        ],
        answer: "size"
    },
    {
        question: "Which NumPy function creates an array filled with zeros?",
        options: [
            "np.zeros()",
            "np.emptyZero()",
            "np.zeroArray()",
            "np.null()"
        ],
        answer: "np.zeros()"
    },
    {
        question: "Which NumPy function creates an array filled with ones?",
        options: [
            "np.ones()",
            "np.oneArray()",
            "np.fillOne()",
            "np.single()"
        ],
        answer: "np.ones()"
    },
    {
        question: "Which NumPy function generates evenly spaced values within an interval?",
        options: [
            "np.linspace()",
            "np.space()",
            "np.rangeSpace()",
            "np.interval()"
        ],
        answer: "np.linspace()"
    },
    {
        question: "Which NumPy module is commonly used for random number generation?",
        options: [
            "np.random",
            "np.number",
            "np.randomize",
            "np.generator"
        ],
        answer: "np.random"
    }
], 
    "Scikit-learn": [
    {
        question: "What is Scikit-learn mainly used for?",
        options: [
            "Machine Learning in Python",
            "Web page styling",
            "Database administration",
            "Video editing"
        ],
        answer: "Machine Learning in Python"
    },
    {
        question: "Which Python library is Scikit-learn built on and commonly uses for numerical operations?",
        options: [
            "NumPy",
            "React",
            "Express.js",
            "Mongoose"
        ],
        answer: "NumPy"
    },
    {
        question: "Which Scikit-learn algorithm is commonly used for classification?",
        options: [
            "Logistic Regression",
            "K-Means only",
            "PCA only",
            "Linear interpolation"
        ],
        answer: "Logistic Regression"
    },
    {
        question: "Which Scikit-learn algorithm is commonly used for clustering?",
        options: [
            "KMeans",
            "LinearRegression",
            "LogisticRegression",
            "DecisionTreeRegressor"
        ],
        answer: "KMeans"
    },
    {
        question: "Which module contains tools for splitting data into training and testing sets?",
        options: [
            "sklearn.model_selection",
            "sklearn.database",
            "sklearn.web",
            "sklearn.files"
        ],
        answer: "sklearn.model_selection"
    },
    {
        question: "Which function is commonly used to split a dataset into training and testing sets?",
        options: [
            "train_test_split()",
            "split_dataset()",
            "divide_data()",
            "dataset_split()"
        ],
        answer: "train_test_split()"
    },
    {
        question: "What is the purpose of StandardScaler?",
        options: [
            "To standardize features",
            "To create neural networks",
            "To connect to MongoDB",
            "To create web routes"
        ],
        answer: "To standardize features"
    },
    {
        question: "Which method is commonly used to train a Scikit-learn model?",
        options: [
            "fit()",
            "trainModel()",
            "learn()",
            "start()"
        ],
        answer: "fit()"
    },
    {
        question: "Which method is commonly used to generate predictions from a trained model?",
        options: [
            "predict()",
            "forecastModel()",
            "output()",
            "guess()"
        ],
        answer: "predict()"
    },
    {
        question: "Which Scikit-learn class is commonly used to evaluate classification accuracy?",
        options: [
            "accuracy_score",
            "classification_check",
            "model_accuracy",
            "score_classifier"
        ],
        answer: "accuracy_score"
    }
],

"Java": [
    {
        question: "What is Java?",
        options: [
            "A programming language",
            "A database",
            "A web browser",
            "An operating system"
        ],
        answer: "A programming language"
    },
    {
        question: "Which keyword is used to create a class in Java?",
        options: [
            "class",
            "struct",
            "define",
            "object"
        ],
        answer: "class"
    },
    {
        question: "Which method is the entry point of a Java application?",
        options: [
            "start()",
            "main()",
            "run()",
            "execute()"
        ],
        answer: "main()"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        options: [
            "implements",
            "extends",
            "inherits",
            "super"
        ],
        answer: "extends"
    },
    {
        question: "Which keyword is used to create an object in Java?",
        options: [
            "object",
            "new",
            "create",
            "instance"
        ],
        answer: "new"
    },
    {
        question: "Which of these is NOT a primitive data type in Java?",
        options: [
            "int",
            "boolean",
            "String",
            "double"
        ],
        answer: "String"
    },
    {
        question: "Which keyword is used to prevent a class from being inherited?",
        options: [
            "static",
            "private",
            "final",
            "const"
        ],
        answer: "final"
    },
    {
        question: "Which concept allows one interface to have multiple implementations?",
        options: [
            "Polymorphism",
            "Compilation",
            "Encapsulation",
            "Iteration"
        ],
        answer: "Polymorphism"
    },
    {
        question: "Which collection stores elements as key-value pairs?",
        options: [
            "ArrayList",
            "HashSet",
            "HashMap",
            "Stack"
        ],
        answer: "HashMap"
    },
    {
        question: "Which keyword is used to handle exceptions?",
        options: [
            "try",
            "check",
            "error",
            "exception"
        ],
        answer: "try"
    }
],
   "Spring Boot": [
    {
        question: "What is Spring Boot?",
        options: [
            "A framework for building Spring applications quickly",
            "A database system",
            "A programming language",
            "A web browser"
        ],
        answer: "A framework for building Spring applications quickly"
    },
    {
        question: "Which language is primarily used with Spring Boot?",
        options: [
            "Java",
            "Python",
            "C",
            "JavaScript"
        ],
        answer: "Java"
    },
    {
        question: "Which annotation is commonly used for a Spring Boot main application class?",
        options: [
            "@SpringBootApplication",
            "@SpringMain",
            "@BootApplication",
            "@MainApplication"
        ],
        answer: "@SpringBootApplication"
    },
    {
        question: "Which method starts a Spring Boot application?",
        options: [
            "SpringApplication.run()",
            "Spring.start()",
            "Application.start()",
            "Boot.runApp()"
        ],
        answer: "SpringApplication.run()"
    },
    {
        question: "What does Spring Boot provide to reduce configuration?",
        options: [
            "Auto-configuration",
            "Manual configuration only",
            "Database replication",
            "Browser automation"
        ],
        answer: "Auto-configuration"
    },
    {
        question: "Which annotation is commonly used to create a REST controller?",
        options: [
            "@RestController",
            "@REST",
            "@ApiController",
            "@WebController"
        ],
        answer: "@RestController"
    },
    {
        question: "Which annotation is commonly used for dependency injection?",
        options: [
            "@Autowired",
            "@InjectOnly",
            "@Dependency",
            "@Wire"
        ],
        answer: "@Autowired"
    },
    {
        question: "Which file commonly contains Spring Boot application configuration?",
        options: [
            "application.properties",
            "config.java",
            "spring.config",
            "boot.xml"
        ],
        answer: "application.properties"
    },
    {
        question: "Which embedded server is commonly used by Spring Boot?",
        options: [
            "Tomcat",
            "MongoDB",
            "MySQL",
            "Nginx"
        ],
        answer: "Tomcat"
    },
    {
        question: "Which dependency is commonly used to build REST APIs in Spring Boot?",
        options: [
            "Spring Web",
            "Spring Database",
            "Spring HTML",
            "Spring Browser"
        ],
        answer: "Spring Web"
    }
],
     "Hibernate": [
    {
        question: "What is Hibernate?",
        options: [
            "An ORM framework for Java",
            "A JavaScript library",
            "A database server",
            "A web browser"
        ],
        answer: "An ORM framework for Java"
    },
    {
        question: "What does ORM stand for?",
        options: [
            "Object Relational Mapping",
            "Object Runtime Management",
            "Online Resource Management",
            "Object Request Model"
        ],
        answer: "Object Relational Mapping"
    },
    {
        question: "Which language is primarily used with Hibernate?",
        options: [
            "Java",
            "Python",
            "C++",
            "JavaScript"
        ],
        answer: "Java"
    },
    {
        question: "Which Hibernate object is used to interact with the database?",
        options: [
            "Session",
            "Controller",
            "Router",
            "Component"
        ],
        answer: "Session"
    },
    {
        question: "Which interface is commonly used to create a Hibernate Session?",
        options: [
            "SessionFactory",
            "SessionBuilderOnly",
            "HibernateManager",
            "DatabaseFactory"
        ],
        answer: "SessionFactory"
    },
    {
        question: "Which annotation maps a Java class to a database table?",
        options: [
            "@Entity",
            "@TableOnly",
            "@Database",
            "@Model"
        ],
        answer: "@Entity"
    },
    {
        question: "Which annotation is commonly used to mark the primary key field?",
        options: [
            "@Id",
            "@Primary",
            "@Key",
            "@PrimaryKey"
        ],
        answer: "@Id"
    },
    {
        question: "Which annotation is used to specify a database table name?",
        options: [
            "@Table",
            "@DatabaseTable",
            "@TableName",
            "@DB"
        ],
        answer: "@Table"
    },
    {
        question: "What is HQL?",
        options: [
            "Hibernate Query Language",
            "Hibernate Quick Language",
            "High Query Logic",
            "Hibernate Question Language"
        ],
        answer: "Hibernate Query Language"
    },
    {
        question: "What is the main benefit of Hibernate?",
        options: [
            "It simplifies database interaction using objects",
            "It creates web pages",
            "It replaces Java",
            "It manages cloud servers"
        ],
        answer: "It simplifies database interaction using objects"
    }
],
    "Maven": [
    {
        question: "What is Apache Maven?",
        options: [
            "A build and dependency management tool",
            "A database system",
            "A web browser",
            "A programming language"
        ],
        answer: "A build and dependency management tool"
    },
    {
        question: "Which file is the main configuration file in a Maven project?",
        options: [
            "pom.xml",
            "maven.json",
            "build.xml",
            "project.config"
        ],
        answer: "pom.xml"
    },
    {
        question: "What does POM stand for?",
        options: [
            "Project Object Model",
            "Project Operation Manager",
            "Program Object Manager",
            "Project Organization Module"
        ],
        answer: "Project Object Model"
    },
    {
        question: "Which command is commonly used to compile a Maven project?",
        options: [
            "mvn compile",
            "mvn build",
            "maven compile",
            "mvn start"
        ],
        answer: "mvn compile"
    },
    {
        question: "Which Maven command creates the project package?",
        options: [
            "mvn package",
            "mvn create",
            "mvn bundle",
            "mvn make"
        ],
        answer: "mvn package"
    },
    {
        question: "Which Maven command runs the tests?",
        options: [
            "mvn test",
            "mvn check",
            "mvn verifyTest",
            "mvn runTest"
        ],
        answer: "mvn test"
    },
    {
        question: "What is a Maven dependency?",
        options: [
            "A library required by a project",
            "A database table",
            "A Java class only",
            "A web page"
        ],
        answer: "A library required by a project"
    },
    {
        question: "Where are Maven dependencies normally declared?",
        options: [
            "pom.xml",
            "server.java",
            "index.html",
            "package.json"
        ],
        answer: "pom.xml"
    },
    {
        question: "Which Maven command removes generated build files?",
        options: [
            "mvn clean",
            "mvn remove",
            "mvn delete",
            "mvn reset"
        ],
        answer: "mvn clean"
    },
    {
        question: "Which Maven phase installs the packaged project into the local repository?",
        options: [
            "install",
            "deployLocal",
            "store",
            "publishLocal"
        ],
        answer: "install"
    }
],
    "Django": [
    {
        question: "What is Django?",
        options: [
            "A Python web framework",
            "A Java database",
            "A CSS framework",
            "An operating system"
        ],
        answer: "A Python web framework"
    },
    {
        question: "Which programming language is primarily used with Django?",
        options: [
            "Python",
            "Java",
            "C++",
            "JavaScript"
        ],
        answer: "Python"
    },
    {
        question: "Which architectural pattern is commonly associated with Django?",
        options: [
            "MVT",
            "MVC only",
            "MVVM only",
            "MVP only"
        ],
        answer: "MVT"
    },
    {
        question: "Which file commonly contains URL routing in a Django project?",
        options: [
            "urls.py",
            "routes.js",
            "router.py",
            "paths.json"
        ],
        answer: "urls.py"
    },
    {
        question: "Which command is commonly used to create a new Django project?",
        options: [
            "django-admin startproject",
            "django create-project",
            "python create-django",
            "django newproject"
        ],
        answer: "django-admin startproject"
    },
    {
        question: "Which command is commonly used to create a Django application?",
        options: [
            "python manage.py startapp",
            "django createapp",
            "python django-app",
            "manage.py newapp"
        ],
        answer: "python manage.py startapp"
    },
    {
        question: "Which file defines models in a typical Django application?",
        options: [
            "models.py",
            "database.py",
            "schema.py",
            "tables.py"
        ],
        answer: "models.py"
    },
    {
        question: "Which command applies Django database migrations?",
        options: [
            "python manage.py migrate",
            "python manage.py database",
            "django migrate-db",
            "python django-migrate"
        ],
        answer: "python manage.py migrate"
    },
    {
        question: "Which Django component handles incoming requests and returns responses?",
        options: [
            "View",
            "Model",
            "Migration",
            "Template"
        ],
        answer: "View"
    },
    {
        question: "Which Django component is mainly responsible for presenting HTML to users?",
        options: [
            "Template",
            "Model",
            "Migration",
            "Middleware only"
        ],
        answer: "Template"
    }
],
    "Flask": [
    {
        question: "What is Flask?",
        options: [
            "A lightweight Python web framework",
            "A Java database",
            "A CSS framework",
            "An operating system"
        ],
        answer: "A lightweight Python web framework"
    },
    {
        question: "Which programming language is primarily used with Flask?",
        options: [
            "Python",
            "Java",
            "C++",
            "Kotlin"
        ],
        answer: "Python"
    },
    {
        question: "Which package is commonly used to create a Flask application?",
        options: [
            "Flask",
            "Django",
            "Express",
            "Spring"
        ],
        answer: "Flask"
    },
    {
        question: "Which decorator is commonly used to define a route in Flask?",
        options: [
            "@app.route()",
            "@app.path()",
            "@route.app()",
            "@flask.url()"
        ],
        answer: "@app.route()"
    },
    {
        question: "Which function starts the Flask development server?",
        options: [
            "app.run()",
            "app.start()",
            "flask.start()",
            "server.runApp()"
        ],
        answer: "app.run()"
    },
    {
        question: "Which object is commonly used to access data from an HTTP request in Flask?",
        options: [
            "request",
            "response",
            "sessionOnly",
            "server"
        ],
        answer: "request"
    },
    {
        question: "Which function is commonly used to return an HTML template in Flask?",
        options: [
            "render_template()",
            "render_html()",
            "show_template()",
            "display_page()"
        ],
        answer: "render_template()"
    },
    {
        question: "What does Flask use to generate URLs for routes?",
        options: [
            "url_for()",
            "make_url()",
            "route_url()",
            "create_path()"
        ],
        answer: "url_for()"
    },
    {
        question: "Which HTTP method is commonly used to submit data to a Flask route?",
        options: [
            "POST",
            "FETCH",
            "SEND",
            "SUBMIT"
        ],
        answer: "POST"
    },
    {
        question: "What is one major characteristic of Flask?",
        options: [
            "It is lightweight and flexible",
            "It requires a built-in ORM",
            "It only supports frontend development",
            "It can only create static websites"
        ],
        answer: "It is lightweight and flexible"
    }
],
   "Kubernetes": [
    {
        question: "What is Kubernetes?",
        options: [
            "A container orchestration platform",
            "A programming language",
            "A database system",
            "A code editor"
        ],
        answer: "A container orchestration platform"
    },
    {
        question: "What is the smallest deployable unit in Kubernetes?",
        options: [
            "Pod",
            "Cluster",
            "Node",
            "Service"
        ],
        answer: "Pod"
    },
    {
        question: "What is a Kubernetes cluster?",
        options: [
            "A group of nodes managed by Kubernetes",
            "A single Docker image",
            "A database table",
            "A source-code repository"
        ],
        answer: "A group of nodes managed by Kubernetes"
    },
    {
        question: "Which Kubernetes object is commonly used to manage replicated application Pods?",
        options: [
            "Deployment",
            "ConfigMap",
            "Secret",
            "Namespace"
        ],
        answer: "Deployment"
    },
    {
        question: "Which Kubernetes object provides a stable network endpoint for Pods?",
        options: [
            "Service",
            "Volume",
            "Deployment",
            "ConfigMap"
        ],
        answer: "Service"
    },
    {
        question: "Which command-line tool is commonly used to interact with a Kubernetes cluster?",
        options: [
            "kubectl",
            "kubecli",
            "k8sctl",
            "clusterctl"
        ],
        answer: "kubectl"
    },
    {
        question: "What is a Kubernetes Node?",
        options: [
            "A machine that runs Kubernetes workloads",
            "A container image",
            "A YAML file",
            "A network protocol"
        ],
        answer: "A machine that runs Kubernetes workloads"
    },
    {
        question: "What is a Namespace used for in Kubernetes?",
        options: [
            "Logical isolation and organization of resources",
            "Building Docker images",
            "Compiling applications",
            "Creating database indexes"
        ],
        answer: "Logical isolation and organization of resources"
    },
    {
        question: "Which file format is commonly used to define Kubernetes resources declaratively?",
        options: [
            "YAML",
            "MP3",
            "EXE",
            "PSD"
        ],
        answer: "YAML"
    },
    {
        question: "What is the main purpose of Kubernetes?",
        options: [
            "Automate deployment, scaling, and management of containers",
            "Replace all programming languages",
            "Design web pages",
            "Store relational database records"
        ],
        answer: "Automate deployment, scaling, and management of containers"
    }
],
    "Terraform": [
    {
        question: "What is Terraform?",
        options: [
            "An Infrastructure as Code tool",
            "A programming language",
            "A database system",
            "A web browser"
        ],
        answer: "An Infrastructure as Code tool"
    },
    {
        question: "Which company develops Terraform?",
        options: [
            "HashiCorp",
            "Google",
            "Microsoft",
            "Meta"
        ],
        answer: "HashiCorp"
    },
    {
        question: "Which language is used to write Terraform configuration files?",
        options: [
            "HCL",
            "HTML",
            "Java",
            "SQL"
        ],
        answer: "HCL"
    },
    {
        question: "What is the common file extension for Terraform configuration files?",
        options: [
            ".tf",
            ".terraform",
            ".hclconfig",
            ".infra"
        ],
        answer: ".tf"
    },
    {
        question: "Which command initializes a Terraform working directory?",
        options: [
            "terraform init",
            "terraform start",
            "terraform setup",
            "terraform create"
        ],
        answer: "terraform init"
    },
    {
        question: "Which command shows what changes Terraform will make?",
        options: [
            "terraform plan",
            "terraform preview",
            "terraform check",
            "terraform changes"
        ],
        answer: "terraform plan"
    },
    {
        question: "Which command applies the Terraform configuration?",
        options: [
            "terraform apply",
            "terraform deploy",
            "terraform run",
            "terraform execute"
        ],
        answer: "terraform apply"
    },
    {
        question: "What is a Terraform provider?",
        options: [
            "A plugin that lets Terraform interact with an external platform or service",
            "A database table",
            "A programming language",
            "A Kubernetes Pod"
        ],
        answer: "A plugin that lets Terraform interact with an external platform or service"
    },
    {
        question: "What does Terraform state store?",
        options: [
            "Information about infrastructure managed by Terraform",
            "Only Terraform documentation",
            "Only source-code comments",
            "Only environment variables"
        ],
        answer: "Information about infrastructure managed by Terraform"
    },
    {
        question: "Which command removes infrastructure managed by Terraform?",
        options: [
            "terraform destroy",
            "terraform remove",
            "terraform delete-all",
            "terraform clean"
        ],
        answer: "terraform destroy"
    }
],
    "Jenkins": [
    {
        question: "What is Jenkins?",
        options: [
            "An automation server used for CI/CD",
            "A database system",
            "A programming language",
            "A web browser"
        ],
        answer: "An automation server used for CI/CD"
    },
    {
        question: "What does CI stand for?",
        options: [
            "Continuous Integration",
            "Code Installation",
            "Continuous Internet",
            "Central Integration"
        ],
        answer: "Continuous Integration"
    },
    {
        question: "What does CD commonly stand for in CI/CD?",
        options: [
            "Continuous Delivery",
            "Code Development",
            "Central Deployment",
            "Computer Distribution"
        ],
        answer: "Continuous Delivery"
    },
    {
        question: "Which language is commonly used to define Jenkins Pipeline scripts?",
        options: [
            "Groovy",
            "Python",
            "HTML",
            "SQL"
        ],
        answer: "Groovy"
    },
    {
        question: "What is a Jenkins Pipeline?",
        options: [
            "A set of automated steps for building, testing, and deploying software",
            "A database schema",
            "A frontend component",
            "A network protocol"
        ],
        answer: "A set of automated steps for building, testing, and deploying software"
    },
    {
        question: "What is a Jenkins agent?",
        options: [
            "A machine that performs Jenkins build or pipeline work",
            "A database server",
            "A browser extension",
            "A source-code repository"
        ],
        answer: "A machine that performs Jenkins build or pipeline work"
    },
    {
        question: "What is a Jenkins plugin used for?",
        options: [
            "Extending Jenkins functionality",
            "Replacing the operating system",
            "Creating databases automatically",
            "Writing HTML pages"
        ],
        answer: "Extending Jenkins functionality"
    },
    {
        question: "Which file is commonly used to define a Jenkins Pipeline as code?",
        options: [
            "Jenkinsfile",
            "jenkins.json",
            "pipeline.xml",
            "build.js"
        ],
        answer: "Jenkinsfile"
    },
    {
        question: "What is the purpose of automated testing in a Jenkins pipeline?",
        options: [
            "To automatically verify software changes",
            "To design the application UI",
            "To create user accounts",
            "To replace source control"
        ],
        answer: "To automatically verify software changes"
    },
    {
        question: "Which version-control system can Jenkins integrate with?",
        options: [
            "Git",
            "Only FTP",
            "Only MongoDB",
            "Only HTML"
        ],
        answer: "Git"
    }
],
    "AWS": [
    {
        question: "What is AWS?",
        options: [
            "A cloud computing platform",
            "A programming language",
            "A database system",
            "A code editor"
        ],
        answer: "A cloud computing platform"
    },
    {
        question: "What does AWS stand for?",
        options: [
            "Amazon Web Services",
            "Advanced Web System",
            "Amazon Web Software",
            "Application Web Services"
        ],
        answer: "Amazon Web Services"
    },
    {
        question: "Which AWS service provides virtual servers?",
        options: [
            "EC2",
            "S3",
            "RDS",
            "Lambda"
        ],
        answer: "EC2"
    },
    {
        question: "Which AWS service is used for object storage?",
        options: [
            "S3",
            "EC2",
            "VPC",
            "IAM"
        ],
        answer: "S3"
    },
    {
        question: "Which AWS service manages users and permissions?",
        options: [
            "IAM",
            "S3",
            "EC2",
            "CloudFront"
        ],
        answer: "IAM"
    },
    {
        question: "Which AWS service is commonly used for managed relational databases?",
        options: [
            "RDS",
            "S3",
            "EC2",
            "Route 53"
        ],
        answer: "RDS"
    },
    {
        question: "Which AWS service provides serverless compute?",
        options: [
            "Lambda",
            "EC2",
            "S3",
            "EBS"
        ],
        answer: "Lambda"
    },
    {
        question: "What is an AWS Region?",
        options: [
            "A geographic area containing AWS infrastructure",
            "A type of IAM user",
            "A storage bucket",
            "A database table"
        ],
        answer: "A geographic area containing AWS infrastructure"
    },
    {
        question: "Which AWS service provides DNS management?",
        options: [
            "Route 53",
            "CloudWatch",
            "ECS",
            "SQS"
        ],
        answer: "Route 53"
    },
    {
        question: "Which AWS service is used for monitoring resources and applications?",
        options: [
            "CloudWatch",
            "S3",
            "IAM",
            "RDS"
        ],
        answer: "CloudWatch"
    }
],
    "Azure": [
    {
        question: "What is Microsoft Azure?",
        options: [
            "A cloud computing platform",
            "A programming language",
            "A database",
            "A code editor"
        ],
        answer: "A cloud computing platform"
    },
    {
        question: "Which company provides Azure?",
        options: [
            "Microsoft",
            "Amazon",
            "Google",
            "IBM"
        ],
        answer: "Microsoft"
    },
    {
        question: "Which Azure service provides virtual machines?",
        options: [
            "Azure Virtual Machines",
            "Azure Storage",
            "Azure DNS",
            "Azure Monitor"
        ],
        answer: "Azure Virtual Machines"
    },
    {
        question: "Which Azure service provides object storage?",
        options: [
            "Azure Blob Storage",
            "Azure Functions",
            "Azure VM",
            "Azure DevOps"
        ],
        answer: "Azure Blob Storage"
    },
    {
        question: "Which Azure service provides serverless functions?",
        options: [
            "Azure Functions",
            "Azure Storage",
            "Azure Virtual Machines",
            "Azure DNS"
        ],
        answer: "Azure Functions"
    },
    {
        question: "What is an Azure Resource Group?",
        options: [
            "A logical container for Azure resources",
            "A programming language",
            "A database engine",
            "A virtual machine"
        ],
        answer: "A logical container for Azure resources"
    },
    {
        question: "Which Azure service is used for monitoring?",
        options: [
            "Azure Monitor",
            "Azure Blob",
            "Azure VM",
            "Azure DNS"
        ],
        answer: "Azure Monitor"
    },
    {
        question: "Which Azure service provides managed relational databases?",
        options: [
            "Azure SQL Database",
            "Azure Blob Storage",
            "Azure Functions",
            "Azure CDN"
        ],
        answer: "Azure SQL Database"
    },
    {
        question: "Which tool is commonly used to manage Azure resources from the command line?",
        options: [
            "Azure CLI",
            "Azure CMD",
            "Azure ShellOnly",
            "Azure Terminal"
        ],
        answer: "Azure CLI"
    },
    {
        question: "What is an Azure Region?",
        options: [
            "A geographic area containing Azure datacenters",
            "A type of database",
            "A programming language",
            "A resource group"
        ],
        answer: "A geographic area containing Azure datacenters"
    }
],
    "Google Cloud": [
    {
        question: "What is Google Cloud?",
        options: [
            "A cloud computing platform",
            "A programming language",
            "A database system",
            "A code editor"
        ],
        answer: "A cloud computing platform"
    },
    {
        question: "Which company provides Google Cloud?",
        options: [
            "Google",
            "Microsoft",
            "Amazon",
            "Oracle"
        ],
        answer: "Google"
    },
    {
        question: "Which Google Cloud service provides virtual machines?",
        options: [
            "Compute Engine",
            "Cloud Storage",
            "Cloud SQL",
            "Cloud DNS"
        ],
        answer: "Compute Engine"
    },
    {
        question: "Which Google Cloud service is used for object storage?",
        options: [
            "Cloud Storage",
            "Compute Engine",
            "Cloud SQL",
            "Cloud Functions"
        ],
        answer: "Cloud Storage"
    },
    {
        question: "Which Google Cloud service provides serverless functions?",
        options: [
            "Cloud Functions",
            "Compute Engine",
            "Cloud Storage",
            "Cloud SQL"
        ],
        answer: "Cloud Functions"
    },
    {
        question: "Which Google Cloud service provides managed relational databases?",
        options: [
            "Cloud SQL",
            "Cloud Storage",
            "Compute Engine",
            "Cloud DNS"
        ],
        answer: "Cloud SQL"
    },
    {
        question: "What is a Google Cloud Region?",
        options: [
            "A geographic area containing cloud infrastructure",
            "A database table",
            "A programming language",
            "A storage bucket"
        ],
        answer: "A geographic area containing cloud infrastructure"
    },
    {
        question: "Which command-line tool is commonly used to interact with Google Cloud?",
        options: [
            "gcloud CLI",
            "googlecmd",
            "cloudctl",
            "gcp-terminal"
        ],
        answer: "gcloud CLI"
    },
    {
        question: "Which Google Cloud service is used for Kubernetes?",
        options: [
            "Google Kubernetes Engine",
            "Cloud Storage",
            "Cloud SQL",
            "Compute Engine"
        ],
        answer: "Google Kubernetes Engine"
    },
    {
        question: "Which Google Cloud service is commonly used for monitoring?",
        options: [
            "Cloud Monitoring",
            "Cloud Storage",
            "Cloud SQL",
            "Compute Engine"
        ],
        answer: "Cloud Monitoring"
    }
],
    "Android Studio": [
    {
        question: "What is Android Studio?",
        options: [
            "An IDE for Android app development",
            "A database system",
            "A cloud platform",
            "A web browser"
        ],
        answer: "An IDE for Android app development"
    },
    {
        question: "Which company develops Android Studio?",
        options: [
            "Google",
            "Microsoft",
            "Amazon",
            "Oracle"
        ],
        answer: "Google"
    },
    {
        question: "Which build system is used by Android projects?",
        options: [
            "Gradle",
            "Maven only",
            "Webpack",
            "npm"
        ],
        answer: "Gradle"
    },
    {
        question: "Which language is officially supported for Android development?",
        options: [
            "Kotlin",
            "PHP",
            "Ruby",
            "SQL"
        ],
        answer: "Kotlin"
    },
    {
        question: "What is an Android Emulator used for?",
        options: [
            "Running and testing Android apps on a virtual device",
            "Managing databases",
            "Writing SQL queries",
            "Hosting websites"
        ],
        answer: "Running and testing Android apps on a virtual device"
    },
    {
        question: "Which file commonly defines Android app dependencies?",
        options: [
            "build.gradle",
            "package.json",
            "requirements.txt",
            "pom.xml"
        ],
        answer: "build.gradle"
    },
    {
        question: "What is Logcat used for?",
        options: [
            "Viewing application and system logs",
            "Designing app layouts",
            "Creating databases",
            "Uploading apps"
        ],
        answer: "Viewing application and system logs"
    },
    {
        question: "What is an Android Activity?",
        options: [
            "A component representing a screen or user interaction entry point",
            "A database table",
            "A cloud server",
            "A build tool"
        ],
        answer: "A component representing a screen or user interaction entry point"
    },
    {
        question: "Which tool is used to visually inspect and edit Android layouts?",
        options: [
            "Layout Editor",
            "SQL Editor",
            "Terminal Editor",
            "Database Designer"
        ],
        answer: "Layout Editor"
    },
    {
        question: "What is the purpose of Android Studio's debugger?",
        options: [
            "To inspect and troubleshoot program execution",
            "To create cloud storage",
            "To manage DNS",
            "To replace Gradle"
        ],
        answer: "To inspect and troubleshoot program execution"
    }
],
    "Kotlin": [
    {
        question: "What is Kotlin?",
        options: [
            "A programming language",
            "A database system",
            "A cloud platform",
            "A web browser"
        ],
        answer: "A programming language"
    },
    {
        question: "Which company developed Kotlin?",
        options: [
            "JetBrains",
            "Google",
            "Microsoft",
            "Amazon"
        ],
        answer: "JetBrains"
    },
    {
        question: "Kotlin is officially supported for which platform?",
        options: [
            "Android",
            "Only Windows",
            "Only Linux",
            "Only iOS"
        ],
        answer: "Android"
    },
    {
        question: "Which keyword declares a read-only variable in Kotlin?",
        options: [
            "val",
            "let",
            "const",
            "readonly"
        ],
        answer: "val"
    },
    {
        question: "Which keyword declares a mutable variable in Kotlin?",
        options: [
            "var",
            "let",
            "mutable",
            "change"
        ],
        answer: "var"
    },
    {
        question: "What does Kotlin's null-safety feature help prevent?",
        options: [
            "Null pointer errors",
            "Network failures",
            "Database corruption",
            "Compilation of all programs"
        ],
        answer: "Null pointer errors"
    },
    {
        question: "Which symbol is commonly used for a nullable Kotlin type?",
        options: [
            "?",
            "!",
            "#",
            "@"
        ],
        answer: "?"
    },
    {
        question: "Which keyword is used to define a function in Kotlin?",
        options: [
            "fun",
            "function",
            "def",
            "method"
        ],
        answer: "fun"
    },
    {
        question: "Which Kotlin feature allows a class to inherit from another class?",
        options: [
            "Inheritance",
            "Compilation",
            "Serialization",
            "Iteration"
        ],
        answer: "Inheritance"
    },
    {
        question: "Which keyword is used when a Kotlin class is intended to be inherited?",
        options: [
            "open",
            "extend",
            "inherit",
            "base"
        ],
        answer: "open"
    }
],
    "Firebase": [
    {
        question: "What is Firebase?",
        options: [
            "A Google platform for building applications",
            "A programming language",
            "A code editor",
            "An operating system"
        ],
        answer: "A Google platform for building applications"
    },
    {
        question: "Which company provides Firebase?",
        options: [
            "Google",
            "Microsoft",
            "Amazon",
            "Oracle"
        ],
        answer: "Google"
    },
    {
        question: "Which Firebase service provides a NoSQL cloud database?",
        options: [
            "Cloud Firestore",
            "Firebase Hosting",
            "Firebase Storage",
            "Firebase Analytics"
        ],
        answer: "Cloud Firestore"
    },
    {
        question: "Which Firebase service is used for user authentication?",
        options: [
            "Firebase Authentication",
            "Firebase Hosting",
            "Firebase Storage",
            "Firebase Functions"
        ],
        answer: "Firebase Authentication"
    },
    {
        question: "Which Firebase service is used to host web applications?",
        options: [
            "Firebase Hosting",
            "Cloud Firestore",
            "Firebase Authentication",
            "Firebase Analytics"
        ],
        answer: "Firebase Hosting"
    },
    {
        question: "Which Firebase service provides cloud file storage?",
        options: [
            "Cloud Storage for Firebase",
            "Firebase Hosting",
            "Cloud Firestore",
            "Firebase Analytics"
        ],
        answer: "Cloud Storage for Firebase"
    },
    {
        question: "What is Firebase Cloud Messaging commonly used for?",
        options: [
            "Sending push notifications",
            "Creating database tables",
            "Compiling Kotlin code",
            "Hosting virtual machines"
        ],
        answer: "Sending push notifications"
    },
    {
        question: "Which Firebase feature provides application usage insights?",
        options: [
            "Google Analytics for Firebase",
            "Firebase Storage",
            "Firebase Hosting",
            "Firebase Authentication"
        ],
        answer: "Google Analytics for Firebase"
    },
    {
        question: "Which Firebase product provides serverless backend functions?",
        options: [
            "Cloud Functions for Firebase",
            "Firebase Hosting",
            "Cloud Storage",
            "Firebase Analytics"
        ],
        answer: "Cloud Functions for Firebase"
    },
    {
        question: "Firebase is commonly useful for which type of development?",
        options: [
            "Mobile and web application development",
            "Only operating system development",
            "Only hardware design",
            "Only desktop publishing"
        ],
        answer: "Mobile and web application development"
    }
],
    "Data Structures": [
    {
        question: "What is a data structure?",
        options: [
            "A way to organize and store data",
            "A programming language",
            "A database server",
            "An operating system"
        ],
        answer: "A way to organize and store data"
    },
    {
        question: "Which data structure follows LIFO?",
        options: [
            "Stack",
            "Queue",
            "Array",
            "Graph"
        ],
        answer: "Stack"
    },
    {
        question: "Which data structure follows FIFO?",
        options: [
            "Queue",
            "Stack",
            "Tree",
            "Heap"
        ],
        answer: "Queue"
    },
    {
        question: "Which data structure stores elements in contiguous memory locations?",
        options: [
            "Array",
            "Linked List",
            "Graph",
            "Tree"
        ],
        answer: "Array"
    },
    {
        question: "Which data structure consists of nodes connected using links?",
        options: [
            "Linked List",
            "Array",
            "Stack",
            "Hash Table"
        ],
        answer: "Linked List"
    },
    {
        question: "Which data structure is commonly used to represent hierarchical data?",
        options: [
            "Tree",
            "Queue",
            "Array",
            "Stack"
        ],
        answer: "Tree"
    },
    {
        question: "Which data structure is commonly used to represent relationships between connected entities?",
        options: [
            "Graph",
            "Stack",
            "Array",
            "Queue"
        ],
        answer: "Graph"
    },
    {
        question: "Which data structure uses key-value pairs for efficient lookup?",
        options: [
            "Hash Table",
            "Stack",
            "Queue",
            "Linked List"
        ],
        answer: "Hash Table"
    },
    {
        question: "Which data structure is commonly used to implement recursion?",
        options: [
            "Stack",
            "Queue",
            "Graph",
            "Hash Table"
        ],
        answer: "Stack"
    },
    {
        question: "What is the main purpose of choosing an appropriate data structure?",
        options: [
            "To make data operations more efficient",
            "To replace the operating system",
            "To create web pages",
            "To eliminate all algorithms"
        ],
        answer: "To make data operations more efficient"
    }
],
    "Algorithms": [
    {
        question: "What is an algorithm?",
        options: [
            "A step-by-step procedure for solving a problem",
            "A programming language",
            "A database system",
            "A computer network"
        ],
        answer: "A step-by-step procedure for solving a problem"
    },
    {
        question: "Which complexity describes constant-time execution?",
        options: [
            "O(1)",
            "O(n)",
            "O(n²)",
            "O(log n)"
        ],
        answer: "O(1)"
    },
    {
        question: "Which algorithm is commonly used to find an item in a sorted array efficiently?",
        options: [
            "Binary Search",
            "Linear Search",
            "Bubble Sort",
            "Depth-First Search"
        ],
        answer: "Binary Search"
    },
    {
        question: "What is the time complexity of binary search on a sorted array?",
        options: [
            "O(log n)",
            "O(n)",
            "O(n²)",
            "O(1)"
        ],
        answer: "O(log n)"
    },
    {
        question: "Which sorting algorithm repeatedly swaps adjacent elements when they are in the wrong order?",
        options: [
            "Bubble Sort",
            "Merge Sort",
            "Quick Sort",
            "Heap Sort"
        ],
        answer: "Bubble Sort"
    },
    {
        question: "Which algorithm follows the divide-and-conquer approach?",
        options: [
            "Merge Sort",
            "Linear Search",
            "Bubble Sort",
            "Selection Sort"
        ],
        answer: "Merge Sort"
    },
    {
        question: "Which algorithm is commonly used to find the shortest paths from a source in a graph with non-negative edge weights?",
        options: [
            "Dijkstra's Algorithm",
            "Binary Search",
            "Bubble Sort",
            "DFS"
        ],
        answer: "Dijkstra's Algorithm"
    },
    {
        question: "Which graph traversal algorithm explores as far as possible along a branch before backtracking?",
        options: [
            "Depth-First Search",
            "Breadth-First Search",
            "Binary Search",
            "Linear Search"
        ],
        answer: "Depth-First Search"
    },
    {
        question: "Which graph traversal algorithm explores neighboring vertices level by level?",
        options: [
            "Breadth-First Search",
            "Depth-First Search",
            "Quick Sort",
            "Binary Search"
        ],
        answer: "Breadth-First Search"
    },
    {
        question: "What does Big-O notation describe?",
        options: [
            "How an algorithm's resource usage grows with input size",
            "The exact programming language used",
            "The number of variables in a program",
            "The computer's screen resolution"
        ],
        answer: "How an algorithm's resource usage grows with input size"
    }
],
    "DSA": [
    {
        question: "What does DSA stand for?",
        options: [
            "Data Structures and Algorithms",
            "Data System Architecture",
            "Database Structure Analysis",
            "Data Software Application"
        ],
        answer: "Data Structures and Algorithms"
    },
    {
        question: "Which data structure follows LIFO?",
        options: [
            "Stack",
            "Queue",
            "Array",
            "Graph"
        ],
        answer: "Stack"
    },
    {
        question: "Which data structure follows FIFO?",
        options: [
            "Queue",
            "Stack",
            "Tree",
            "Heap"
        ],
        answer: "Queue"
    },
    {
        question: "What is the average time complexity of searching in a hash table?",
        options: [
            "O(1)",
            "O(n)",
            "O(n²)",
            "O(log n)"
        ],
        answer: "O(1)"
    },
    {
        question: "Which algorithm is used to efficiently search a sorted array?",
        options: [
            "Binary Search",
            "Bubble Sort",
            "Linear Search",
            "DFS"
        ],
        answer: "Binary Search"
    },
    {
        question: "Which sorting algorithm uses divide and conquer?",
        options: [
            "Merge Sort",
            "Bubble Sort",
            "Selection Sort",
            "Linear Search"
        ],
        answer: "Merge Sort"
    },
    {
        question: "Which traversal uses a queue?",
        options: [
            "Breadth-First Search",
            "Depth-First Search",
            "Binary Search",
            "Quick Sort"
        ],
        answer: "Breadth-First Search"
    },
    {
        question: "Which traversal commonly uses a stack or recursion?",
        options: [
            "Depth-First Search",
            "Breadth-First Search",
            "Binary Search",
            "Merge Sort"
        ],
        answer: "Depth-First Search"
    },
    {
        question: "Which data structure is commonly used to implement a priority queue?",
        options: [
            "Heap",
            "Array only",
            "Stack",
            "Linked List only"
        ],
        answer: "Heap"
    },
    {
        question: "What is the main goal of studying DSA?",
        options: [
            "To design efficient solutions to computational problems",
            "To create only web pages",
            "To manage cloud accounts",
            "To replace programming languages"
        ],
        answer: "To design efficient solutions to computational problems"
    }
],
    "OOP": [
    {
        question: "What does OOP stand for?",
        options: [
            "Object-Oriented Programming",
            "Object-Oriented Process",
            "Object Operation Program",
            "Organized Object Programming"
        ],
        answer: "Object-Oriented Programming"
    },
    {
        question: "Which concept bundles data and methods together inside an object?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction"
        ],
        answer: "Encapsulation"
    },
    {
        question: "Which OOP concept allows a class to acquire properties and behavior from another class?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Abstraction",
            "Compilation"
        ],
        answer: "Inheritance"
    },
    {
        question: "Which OOP concept allows the same interface to have different implementations?",
        options: [
            "Polymorphism",
            "Encapsulation",
            "Inheritance",
            "Instantiation"
        ],
        answer: "Polymorphism"
    },
    {
        question: "Which OOP concept focuses on hiding unnecessary implementation details?",
        options: [
            "Abstraction",
            "Inheritance",
            "Polymorphism",
            "Iteration"
        ],
        answer: "Abstraction"
    },
    {
        question: "What is a class in OOP?",
        options: [
            "A blueprint for creating objects",
            "A database table",
            "A network connection",
            "A compiler"
        ],
        answer: "A blueprint for creating objects"
    },
    {
        question: "What is an object?",
        options: [
            "An instance of a class",
            "A programming language",
            "A database schema",
            "A source-code editor"
        ],
        answer: "An instance of a class"
    },
    {
        question: "Which feature allows a method to have the same name with different parameter lists?",
        options: [
            "Method Overloading",
            "Method Hiding",
            "Method Deletion",
            "Method Compilation"
        ],
        answer: "Method Overloading"
    },
    {
        question: "Which relationship represents an 'is-a' relationship?",
        options: [
            "Inheritance",
            "Composition",
            "Aggregation",
            "Association"
        ],
        answer: "Inheritance"
    },
    {
        question: "What is the main benefit of OOP?",
        options: [
            "It helps organize software using reusable objects and behavior",
            "It eliminates the need for algorithms",
            "It only creates database tables",
            "It replaces operating systems"
        ],
        answer: "It helps organize software using reusable objects and behavior"
    }
],

    "DBMS": [
    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Monitoring Service",
            "Data Management Software"
        ],
        answer: "Database Management System"
    },
    {
        question: "What is the main purpose of a DBMS?",
        options: [
            "To store, manage, and retrieve data",
            "To design web pages",
            "To compile programs",
            "To manage computer hardware"
        ],
        answer: "To store, manage, and retrieve data"
    },
    {
        question: "Which language is commonly used to query relational databases?",
        options: [
            "SQL",
            "HTML",
            "CSS",
            "XML"
        ],
        answer: "SQL"
    },
    {
        question: "Which key uniquely identifies a record in a relational table?",
        options: [
            "Primary Key",
            "Foreign Key",
            "Candidate Key",
            "Composite Key"
        ],
        answer: "Primary Key"
    },
    {
        question: "Which key establishes a relationship between tables?",
        options: [
            "Foreign Key",
            "Primary Key",
            "Super Key",
            "Alternate Key"
        ],
        answer: "Foreign Key"
    },
    {
        question: "What does normalization primarily help reduce?",
        options: [
            "Data redundancy",
            "Network bandwidth",
            "CPU temperature",
            "Source-code length"
        ],
        answer: "Data redundancy"
    },
    {
        question: "Which SQL command is used to retrieve data?",
        options: [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        answer: "SELECT"
    },
    {
        question: "Which SQL command is used to add new records?",
        options: [
            "INSERT",
            "SELECT",
            "ALTER",
            "DROP"
        ],
        answer: "INSERT"
    },
    {
        question: "What is a transaction in a DBMS?",
        options: [
            "A logical unit of database operations",
            "A database table",
            "A programming language",
            "A network device"
        ],
        answer: "A logical unit of database operations"
    },
    {
        question: "Which property ensures that a transaction's changes are preserved after commit?",
        options: [
            "Durability",
            "Atomicity",
            "Consistency",
            "Isolation"
        ],
        answer: "Durability"
    }
],
    "Operating System": [
    {
        question: "What is an Operating System?",
        options: [
            "System software that manages computer resources",
            "A programming language",
            "A database system",
            "A web browser"
        ],
        answer: "System software that manages computer resources"
    },
    {
        question: "Which component manages the core operations of an operating system?",
        options: [
            "Kernel",
            "Compiler",
            "Browser",
            "Database"
        ],
        answer: "Kernel"
    },
    {
        question: "What is a process?",
        options: [
            "A program in execution",
            "A source-code file",
            "A database table",
            "A hardware device"
        ],
        answer: "A program in execution"
    },
    {
        question: "Which scheduling algorithm executes processes in the order they arrive?",
        options: [
            "First-Come, First-Served",
            "Round Robin",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        answer: "First-Come, First-Served"
    },
    {
        question: "Which scheduling algorithm uses a time quantum?",
        options: [
            "Round Robin",
            "FCFS",
            "Shortest Job First",
            "Priority Scheduling"
        ],
        answer: "Round Robin"
    },
    {
        question: "What is virtual memory?",
        options: [
            "A technique that uses storage to extend available memory",
            "A type of CPU",
            "A network protocol",
            "A programming language"
        ],
        answer: "A technique that uses storage to extend available memory"
    },
    {
        question: "What is deadlock?",
        options: [
            "A state where processes wait indefinitely for resources",
            "A type of memory",
            "A CPU instruction",
            "A file format"
        ],
        answer: "A state where processes wait indefinitely for resources"
    },
    {
        question: "Which memory is directly accessible by the CPU for active programs?",
        options: [
            "RAM",
            "Hard Disk",
            "USB Drive",
            "DVD"
        ],
        answer: "RAM"
    },
    {
        question: "What does multitasking mean?",
        options: [
            "Running multiple tasks seemingly at the same time",
            "Using multiple keyboards",
            "Installing multiple operating systems only",
            "Running only one program"
        ],
        answer: "Running multiple tasks seemingly at the same time"
    },
    {
        question: "Which operating system is open source?",
        options: [
            "Linux",
            "Windows",
            "macOS",
            "iOS"
        ],
        answer: "Linux"
    }
],
    "Computer Networks": [
    {
        question: "What is a computer network?",
        options: [
            "A group of connected devices that communicate with each other",
            "A programming language",
            "A database system",
            "An operating system"
        ],
        answer: "A group of connected devices that communicate with each other"
    },
    {
        question: "What does LAN stand for?",
        options: [
            "Local Area Network",
            "Large Access Network",
            "Linked Area Node",
            "Local Access Node"
        ],
        answer: "Local Area Network"
    },
    {
        question: "Which protocol is used to transfer web pages?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "SSH"
        ],
        answer: "HTTP"
    },
    {
        question: "Which protocol is commonly used for secure web communication?",
        options: [
            "HTTPS",
            "HTTP",
            "FTP",
            "SMTP"
        ],
        answer: "HTTPS"
    },
    {
        question: "What does IP stand for?",
        options: [
            "Internet Protocol",
            "Internet Process",
            "Internal Protocol",
            "Internet Program"
        ],
        answer: "Internet Protocol"
    },
    {
        question: "Which device forwards packets between different networks?",
        options: [
            "Router",
            "Switch",
            "Hub",
            "Repeater"
        ],
        answer: "Router"
    },
    {
        question: "Which protocol is used to translate domain names into IP addresses?",
        options: [
            "DNS",
            "HTTP",
            "FTP",
            "SMTP"
        ],
        answer: "DNS"
    },
    {
        question: "Which protocol is commonly used to send email?",
        options: [
            "SMTP",
            "HTTP",
            "DNS",
            "FTP"
        ],
        answer: "SMTP"
    },
    {
        question: "Which transport-layer protocol provides reliable, connection-oriented communication?",
        options: [
            "TCP",
            "UDP",
            "IP",
            "DNS"
        ],
        answer: "TCP"
    },
    {
        question: "Which transport-layer protocol is connectionless?",
        options: [
            "UDP",
            "TCP",
            "HTTP",
            "FTP"
        ],
        answer: "UDP"
    }
],
    "GitHub": [
    {
        question: "What is GitHub?",
        options: [
            "A platform for hosting and collaborating on Git repositories",
            "A programming language",
            "A database management system",
            "An operating system"
        ],
        answer: "A platform for hosting and collaborating on Git repositories"
    },
    {
        question: "Which tool is GitHub primarily built around?",
        options: [
            "Git",
            "Docker",
            "Kubernetes",
            "Jenkins"
        ],
        answer: "Git"
    },
    {
        question: "What is a repository?",
        options: [
            "A location that stores a project's files and version history",
            "A programming language",
            "A cloud server only",
            "A database query"
        ],
        answer: "A location that stores a project's files and version history"
    },
    {
        question: "What is a GitHub commit?",
        options: [
            "A recorded set of changes to files",
            "A new repository",
            "A cloud server",
            "A programming language"
        ],
        answer: "A recorded set of changes to files"
    },
    {
        question: "What is a branch used for?",
        options: [
            "Developing changes separately from another line of development",
            "Deleting all repositories",
            "Installing Git",
            "Creating a database"
        ],
        answer: "Developing changes separately from another line of development"
    },
    {
        question: "What is a pull request?",
        options: [
            "A request to review and merge changes",
            "A command to install Git",
            "A database backup",
            "A server restart"
        ],
        answer: "A request to review and merge changes"
    },
    {
        question: "Which command downloads a remote repository to a local machine?",
        options: [
            "git clone",
            "git copy",
            "git download",
            "git pull-repo"
        ],
        answer: "git clone"
    },
    {
        question: "Which file commonly contains information about a project's purpose and usage?",
        options: [
            "README.md",
            "PROJECT.exe",
            "INDEX.db",
            "CONFIG.git"
        ],
        answer: "README.md"
    },
    {
        question: "What is a GitHub issue commonly used for?",
        options: [
            "Tracking bugs, tasks, and feature requests",
            "Compiling source code",
            "Creating operating systems",
            "Managing CPU memory"
        ],
        answer: "Tracking bugs, tasks, and feature requests"
    },
    {
        question: "What is GitHub Actions used for?",
        options: [
            "Automating workflows such as testing and deployment",
            "Editing images",
            "Creating databases only",
            "Replacing Git"
        ],
        answer: "Automating workflows such as testing and deployment"
    }
],
    "Postman": [
    {
        question: "What is Postman primarily used for?",
        options: [
            "Testing and interacting with APIs",
            "Editing images",
            "Managing databases",
            "Writing operating systems"
        ],
        answer: "Testing and interacting with APIs"
    },
    {
        question: "Which HTTP method is commonly used to retrieve data?",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        answer: "GET"
    },
    {
        question: "Which HTTP method is commonly used to create a resource?",
        options: [
            "POST",
            "GET",
            "DELETE",
            "HEAD"
        ],
        answer: "POST"
    },
    {
        question: "Which HTTP method is commonly used to update an existing resource completely?",
        options: [
            "PUT",
            "GET",
            "POST",
            "DELETE"
        ],
        answer: "PUT"
    },
    {
        question: "Which HTTP method is commonly used to remove a resource?",
        options: [
            "DELETE",
            "GET",
            "POST",
            "PATCH"
        ],
        answer: "DELETE"
    },
    {
        question: "Where can you provide JSON data for an API request in Postman?",
        options: [
            "Body",
            "History",
            "Console",
            "Collection name"
        ],
        answer: "Body"
    },
    {
        question: "What is a Postman collection?",
        options: [
            "A group of saved API requests",
            "A database table",
            "A programming language",
            "A web server"
        ],
        answer: "A group of saved API requests"
    },
    {
        question: "Where are HTTP request headers added in Postman?",
        options: [
            "Headers tab",
            "Tests tab",
            "History tab",
            "Console tab"
        ],
        answer: "Headers tab"
    },
    {
        question: "What does a 200 HTTP status code generally indicate?",
        options: [
            "The request was successful",
            "The resource was not found",
            "The server failed",
            "The request was unauthorized"
        ],
        answer: "The request was successful"
    },
    {
        question: "What is Postman's test feature commonly used for?",
        options: [
            "Writing scripts to validate API responses",
            "Designing website layouts",
            "Creating database schemas",
            "Installing operating systems"
        ],
        answer: "Writing scripts to validate API responses"
    }
],
    "Linux": [
    {
        question: "What is Linux?",
        options: [
            "An open-source operating system",
            "A programming language",
            "A database system",
            "A web browser"
        ],
        answer: "An open-source operating system"
    },
    {
        question: "Which command lists files and directories?",
        options: [
            "ls",
            "cd",
            "pwd",
            "mkdir"
        ],
        answer: "ls"
    },
    {
        question: "Which command displays the current working directory?",
        options: [
            "pwd",
            "ls",
            "cd",
            "whoami"
        ],
        answer: "pwd"
    },
    {
        question: "Which command changes the current directory?",
        options: [
            "cd",
            "ls",
            "pwd",
            "touch"
        ],
        answer: "cd"
    },
    {
        question: "Which command creates a new directory?",
        options: [
            "mkdir",
            "rmdir",
            "touch",
            "create"
        ],
        answer: "mkdir"
    },
    {
        question: "Which command creates an empty file?",
        options: [
            "touch",
            "mkdir",
            "file",
            "new"
        ],
        answer: "touch"
    },
    {
        question: "Which command removes a file?",
        options: [
            "rm",
            "delete",
            "remove",
            "erase"
        ],
        answer: "rm"
    },
    {
        question: "Which command displays the contents of a text file?",
        options: [
            "cat",
            "show",
            "open",
            "read"
        ],
        answer: "cat"
    },
    {
        question: "Which command is commonly used to install packages on Ubuntu?",
        options: [
            "apt",
            "npm",
            "pip",
            "yumonly"
        ],
        answer: "apt"
    },
    {
        question: "Which command shows the current logged-in user?",
        options: [
            "whoami",
            "username",
            "user",
            "currentuser"
        ],
        answer: "whoami"
    }
],
   "Communication": [
    {
        question: "What is effective communication?",
        options: [
            "Clearly exchanging information and understanding",
            "Speaking without listening",
            "Avoiding feedback",
            "Using technical words only"
        ],
        answer: "Clearly exchanging information and understanding"
    },
    {
        question: "Which skill is essential for effective communication?",
        options: [
            "Active listening",
            "Ignoring the speaker",
            "Interrupting frequently",
            "Avoiding questions"
        ],
        answer: "Active listening"
    },
    {
        question: "What is active listening?",
        options: [
            "Paying attention and understanding the speaker",
            "Waiting only for your turn to speak",
            "Ignoring non-verbal cues",
            "Changing the topic frequently"
        ],
        answer: "Paying attention and understanding the speaker"
    },
    {
        question: "What is the purpose of feedback in communication?",
        options: [
            "To confirm understanding and improve communication",
            "To stop communication",
            "To avoid clarification",
            "To replace the original message"
        ],
        answer: "To confirm understanding and improve communication"
    },
    {
        question: "Which is an example of non-verbal communication?",
        options: [
            "Facial expressions",
            "Email text",
            "Written report",
            "Source code"
        ],
        answer: "Facial expressions"
    },
    {
        question: "What helps make a message clear?",
        options: [
            "Using simple and precise language",
            "Using unnecessary jargon",
            "Giving unrelated information",
            "Avoiding structure"
        ],
        answer: "Using simple and precise language"
    },
    {
        question: "Why is asking questions useful in communication?",
        options: [
            "It helps clarify information",
            "It prevents understanding",
            "It replaces listening",
            "It avoids feedback"
        ],
        answer: "It helps clarify information"
    },
    {
        question: "What is an important part of professional communication?",
        options: [
            "Respectful and clear interaction",
            "Frequent interruptions",
            "Ignoring others",
            "Using unclear messages"
        ],
        answer: "Respectful and clear interaction"
    },
    {
        question: "Which practice improves communication during teamwork?",
        options: [
            "Sharing information clearly with team members",
            "Keeping important information hidden",
            "Ignoring team feedback",
            "Avoiding discussions"
        ],
        answer: "Sharing information clearly with team members"
    },
    {
        question: "What is the main goal of communication?",
        options: [
            "To exchange information and achieve mutual understanding",
            "To speak as much as possible",
            "To avoid interaction",
            "To make messages complicated"
        ],
        answer: "To exchange information and achieve mutual understanding"
    }
],
    "Problem Solving": [
    {
        question: "What is problem solving?",
        options: [
            "A systematic process of finding a solution",
            "Avoiding difficult tasks",
            "Guessing without analysis",
            "Memorizing information only"
        ],
        answer: "A systematic process of finding a solution"
    },
    {
        question: "What should you do first when solving a problem?",
        options: [
            "Understand and define the problem",
            "Implement code immediately",
            "Choose a random solution",
            "Ignore the requirements"
        ],
        answer: "Understand and define the problem"
    },
    {
        question: "Why is breaking a complex problem into smaller parts useful?",
        options: [
            "It makes the problem easier to analyze and solve",
            "It removes the need for testing",
            "It guarantees zero errors",
            "It eliminates all requirements"
        ],
        answer: "It makes the problem easier to analyze and solve"
    },
    {
        question: "What is brainstorming commonly used for?",
        options: [
            "Generating possible solutions",
            "Deleting requirements",
            "Avoiding analysis",
            "Testing hardware"
        ],
        answer: "Generating possible solutions"
    },
    {
        question: "Why should a solution be evaluated?",
        options: [
            "To determine whether it effectively solves the problem",
            "To make the problem more complex",
            "To avoid collecting information",
            "To eliminate alternatives"
        ],
        answer: "To determine whether it effectively solves the problem"
    },
    {
        question: "What does root-cause analysis try to identify?",
        options: [
            "The underlying cause of a problem",
            "The most expensive solution",
            "The programming language used",
            "The user's device"
        ],
        answer: "The underlying cause of a problem"
    },
    {
        question: "What is a useful approach when a solution does not work?",
        options: [
            "Analyze the failure and try an improved approach",
            "Ignore the result",
            "Stop analyzing permanently",
            "Delete all project files"
        ],
        answer: "Analyze the failure and try an improved approach"
    },
    {
        question: "Why are constraints important in problem solving?",
        options: [
            "They define limitations that the solution must satisfy",
            "They remove the problem",
            "They guarantee one solution",
            "They replace requirements"
        ],
        answer: "They define limitations that the solution must satisfy"
    },
    {
        question: "What helps compare multiple possible solutions?",
        options: [
            "Evaluating their advantages, disadvantages, and constraints",
            "Choosing the first idea automatically",
            "Ignoring requirements",
            "Avoiding testing"
        ],
        answer: "Evaluating their advantages, disadvantages, and constraints"
    },
    {
        question: "What is an important quality of a good problem-solving approach?",
        options: [
            "Logical and systematic reasoning",
            "Random guessing",
            "Ignoring evidence",
            "Avoiding feedback"
        ],
        answer: "Logical and systematic reasoning"
    }
],
    "Leadership": [
    {
        question: "What is leadership?",
        options: [
            "The ability to guide and motivate others toward a goal",
            "Working without communication",
            "Avoiding responsibility",
            "Making decisions without considering others"
        ],
        answer: "The ability to guide and motivate others toward a goal"
    },
    {
        question: "Which quality is important for an effective leader?",
        options: [
            "Good communication",
            "Ignoring feedback",
            "Avoiding responsibility",
            "Poor decision-making"
        ],
        answer: "Good communication"
    },
    {
        question: "What should a good leader do when team members have different opinions?",
        options: [
            "Listen and consider the different viewpoints",
            "Ignore everyone",
            "End the discussion immediately",
            "Choose randomly"
        ],
        answer: "Listen and consider the different viewpoints"
    },
    {
        question: "Why is delegation important in leadership?",
        options: [
            "It distributes responsibilities effectively",
            "It eliminates teamwork",
            "It avoids accountability",
            "It prevents communication"
        ],
        answer: "It distributes responsibilities effectively"
    },
    {
        question: "What is a leader's role during a team problem?",
        options: [
            "Help the team analyze the problem and find a solution",
            "Blame one team member",
            "Ignore the problem",
            "Avoid making decisions"
        ],
        answer: "Help the team analyze the problem and find a solution"
    },
    {
        question: "Which behavior builds trust within a team?",
        options: [
            "Being honest and consistent",
            "Hiding information",
            "Breaking commitments",
            "Ignoring team members"
        ],
        answer: "Being honest and consistent"
    },
    {
        question: "What does motivation help a leader achieve?",
        options: [
            "Encourage team members to work toward shared goals",
            "Reduce communication",
            "Avoid responsibility",
            "Eliminate planning"
        ],
        answer: "Encourage team members to work toward shared goals"
    },
    {
        question: "Why is decision-making important for leaders?",
        options: [
            "Leaders often need to choose appropriate actions",
            "It removes the need for teamwork",
            "It prevents problem solving",
            "It eliminates communication"
        ],
        answer: "Leaders often need to choose appropriate actions"
    },
    {
        question: "What is an important part of responsible leadership?",
        options: [
            "Taking responsibility for decisions and outcomes",
            "Blaming others for every result",
            "Avoiding difficult decisions",
            "Ignoring team goals"
        ],
        answer: "Taking responsibility for decisions and outcomes"
    },
    {
        question: "What is the main goal of effective leadership?",
        options: [
            "Help people work together toward a common goal",
            "Control every individual action",
            "Avoid collaboration",
            "Make teamwork unnecessary"
        ],
        answer: "Help people work together toward a common goal"
    }
],
    "Teamwork": [
    {
        question: "What is teamwork?",
        options: [
            "Working together to achieve a common goal",
            "Working without communication",
            "Avoiding responsibility",
            "Competing with every team member"
        ],
        answer: "Working together to achieve a common goal"
    },
    {
        question: "Which quality is essential for effective teamwork?",
        options: [
            "Communication",
            "Isolation",
            "Ignoring feedback",
            "Avoiding collaboration"
        ],
        answer: "Communication"
    },
    {
        question: "Why is sharing responsibilities important in a team?",
        options: [
            "It distributes work among team members",
            "It removes accountability",
            "It prevents collaboration",
            "It eliminates planning"
        ],
        answer: "It distributes work among team members"
    },
    {
        question: "What should team members do when there is a disagreement?",
        options: [
            "Discuss the issue respectfully and seek a solution",
            "Ignore the problem",
            "Stop communicating",
            "Blame another member"
        ],
        answer: "Discuss the issue respectfully and seek a solution"
    },
    {
        question: "What does trust contribute to teamwork?",
        options: [
            "Better cooperation among team members",
            "Less communication",
            "More conflicts",
            "Avoidance of responsibilities"
        ],
        answer: "Better cooperation among team members"
    },
    {
        question: "Why is active listening useful in a team?",
        options: [
            "It helps members understand each other's ideas",
            "It prevents discussion",
            "It eliminates feedback",
            "It reduces cooperation"
        ],
        answer: "It helps members understand each other's ideas"
    },
    {
        question: "What is accountability in teamwork?",
        options: [
            "Taking responsibility for assigned tasks",
            "Avoiding assigned work",
            "Blaming other members",
            "Ignoring deadlines"
        ],
        answer: "Taking responsibility for assigned tasks"
    },
    {
        question: "How can a team handle a difficult task effectively?",
        options: [
            "Break the task into responsibilities and coordinate efforts",
            "Let one person do everything",
            "Avoid communication",
            "Ignore the requirements"
        ],
        answer: "Break the task into responsibilities and coordinate efforts"
    },
    {
        question: "What helps a team achieve its goals?",
        options: [
            "Coordination and cooperation",
            "Individual competition",
            "Poor communication",
            "Unclear responsibilities"
        ],
        answer: "Coordination and cooperation"
    },
    {
        question: "What is a key benefit of teamwork?",
        options: [
            "Combining different skills and ideas",
            "Eliminating communication",
            "Avoiding responsibility",
            "Making planning unnecessary"
        ],
        answer: "Combining different skills and ideas"
    }
],
    "TypeScript": [
    {
        question: "What is TypeScript?",
        options: [
            "A typed superset of JavaScript",
            "A database system",
            "An operating system",
            "A web browser"
        ],
        answer: "A typed superset of JavaScript"
    },
    {
        question: "Which company develops TypeScript?",
        options: [
            "Microsoft",
            "Google",
            "Amazon",
            "Oracle"
        ],
        answer: "Microsoft"
    },
    {
        question: "Which file extension is commonly used for TypeScript files?",
        options: [
            ".ts",
            ".java",
            ".py",
            ".php"
        ],
        answer: ".ts"
    },
    {
        question: "Which TypeScript type represents text?",
        options: [
            "string",
            "text",
            "char",
            "StringValue"
        ],
        answer: "string"
    },
    {
        question: "Which TypeScript type represents true or false values?",
        options: [
            "boolean",
            "boolValue",
            "binary",
            "logical"
        ],
        answer: "boolean"
    },
    {
        question: "Which keyword can be used to define an interface in TypeScript?",
        options: [
            "interface",
            "struct",
            "schema",
            "contract"
        ],
        answer: "interface"
    },
    {
        question: "What is a major benefit of TypeScript?",
        options: [
            "Static type checking",
            "Automatic database creation",
            "Built-in web hosting",
            "Replacing HTML"
        ],
        answer: "Static type checking"
    },
    {
        question: "What does TypeScript generally compile into?",
        options: [
            "JavaScript",
            "Java",
            "Python",
            "C++"
        ],
        answer: "JavaScript"
    },
    {
        question: "Which symbol is commonly used to specify a variable's type?",
        options: [
            ":",
            "#",
            "@",
            "$"
        ],
        answer: ":"
    },
    {
        question: "Which TypeScript type can represent a value that may be one of several specified types?",
        options: [
            "Union type",
            "Fixed type",
            "Single type",
            "Static class"
        ],
        answer: "Union type"
    }
],
    
      };

    const questions = quizQuestions[skill] || [];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const [answerSubmitted, setAnswerSubmitted] = useState(false);

    if (!questions.length) {
        return null;
    }

    const question = questions[currentQuestion];

   const handleNext = () => {
    if (!selectedAnswer) return;

    if (!answerSubmitted) {
        setAnswerSubmitted(true);

        if (selectedAnswer === question.answer) {
            setScore(score + 1);
        }

        return;
    }

    if (currentQuestion === questions.length - 1) {
        setFinished(true);
        return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
    setAnswerSubmitted(false);
};

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setScore(0);
        setFinished(false);
    };

    return (
        <div className="mt-5 p-5 rounded-xl bg-purple-50 border border-purple-200">

            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-700">
                    ❓ {skill} Quiz
                </h3>

                {!finished && (
                    <span className="text-sm text-gray-600">
                        Question {currentQuestion + 1} / {questions.length}
                    </span>
                )}
            </div>

            {finished ? (
                <div className="text-center py-6">

                    <div className="text-4xl mb-3">
                        🎉
                    </div>

                    <h4 className="text-xl font-bold text-gray-800">
                        Quiz Completed!
                    </h4>

                    <p className="text-gray-600 mt-2">
                        Your Score
                    </p>

                    <p className="text-3xl font-bold text-purple-600 mt-1">
                        {score} / {questions.length}
                    </p>

                    <p className="text-lg font-semibold text-gray-700 mt-2">
                     Percentage: {Math.round((score / questions.length) * 100)}%
                    </p>

                    <p className="text-sm text-gray-600 mt-3">
                    {Math.round((score / questions.length) * 100) >= 80
                      ? "🎉 Excellent! You have a strong understanding of this skill."
                      : Math.round((score / questions.length) * 100) >= 60
                         ? "👍 Good job! Keep practicing to improve further."
                        : "📚 Keep learning and try the quiz again to improve your score."}
                        </p>


                    <button
                        onClick={handleRestart}
                        className="mt-5 px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                    >
                        Try Again
                    </button>

                </div>
            ) : (

                <div>

                    <p className="font-semibold text-gray-800 mb-4">
                        {question.question}
                    </p>

                    <div className="space-y-3">

                        {question.options.map((option, index) => (

                            <label
                                key={index}
                                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                                    selectedAnswer === option
                                        ? "border-purple-500 bg-purple-100"
                                        : "border-gray-200 bg-white hover:bg-gray-50"
                                }`}
                            >

                                <input
                                    type="radio"
                                    name={`quiz-${currentQuestion}`}
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={(e) =>
                                        setSelectedAnswer(e.target.value)
                                    }
                                />

                                <span className="text-gray-700">
                                    {option}
                                </span>

                            </label>

                        ))}

                    </div>

                    {answerSubmitted && (
    <div className="mt-4 p-4 rounded-lg bg-white border border-gray-200">
        {selectedAnswer === question.answer ? (
            <p className="font-semibold text-green-600">
                ✅ Correct answer!
            </p>
        ) : (
            <div>
                <p className="font-semibold text-red-600">
                    ❌ Incorrect answer!
                </p>

                <p className="text-sm text-gray-600 mt-1">
                    Correct answer:{" "}
                    <span className="font-semibold">
                        {question.answer}
                    </span>
                </p>
            </div>
        )}
    </div>
)}

                    <button
                        onClick={handleNext}
                        disabled={!selectedAnswer}
                        className="mt-5 px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                    >
                       {answerSubmitted
                       ? currentQuestion === questions.length - 1
                         ? "Finish Quiz"
                         : "Next Question"
                            : "Submit Answer"}
                            </button>

                </div>
            )}

        </div>
    );
};

export default QuizCard;