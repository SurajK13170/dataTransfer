const express = require('express');
const app = express();
const axios = require('axios');
const port = 8080

app.post('/dataPushFunction', async (req, res) => {
    const { requestBody } = req.body;
    try {
        console.log("requestBody data to" , requestBody);
        const response = await axios.post("https://abhasbx.abdm.gov.in/abha/api/v3/patient-hiu/app/v0.5/health-information/transfer", JSON.stringify(requestBody), {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log("Data push response:", response.data);
        res.status(200).json({ status: "success", data: response.data });
    } catch (error) {
        console.log("Error pushing data:", error);
        res.status(500).json({ status: "failure", error: error.message });
    }
});

app.get("/", async(req, ress)=>{
    ress.status(200).send("Hello")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
