const fetch = require("node-fetch");

const API_KEY = "Fstldz4CDC3yJoOsaBPJQuOqdidZ7p6BIe4-1lYHJn1a";

async function getAccessToken() {

    const response = await fetch(
        "https://iam.cloud.ibm.com/identity/token",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },
            body:
                "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" +
                API_KEY
        }
    );

    const data = await response.json();

    return data.access_token;
}

async function generateText() {

    const token = await getAccessToken();

    const response = await fetch(
        "https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2023-05-29",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content:
                            "Suggest personalized AI learning roadmap"
                    }
                ],
                project_id:
                    "ff031130-8100-427e-8670-e73443098f9d",
                model_id: "ibm/granite-4-h-small",
                max_tokens: 200
            })
        }
    );

    const result = await response.json();

    console.log(JSON.stringify(result, null, 2));
}

generateText();