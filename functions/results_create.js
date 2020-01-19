import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.fauna_db_key
});

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    console.log("Writing results to db...");
    client.query(q.Create(q.Collection("results"), {data: data.results}))
    .then(response => {
        console.log("Success: ", response)
        console.log("Writing demographics to db...");
        client.query(q.Create(q.Collection("demographics"), {data: {...data.demographics, results: response.ref}}))
        .then(response => {
            console.log("Success: ", response)
        })
        .catch(error => {
            console.log("Error: ", error)
        })
    
    })
    .catch(error => {
        console.log("Error: ", error)
    })

    return callback(null, {
        statusCode: 200,
        body: "of Christ"
    })
}

