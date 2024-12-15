import observer from "./observer.js"

const sendToGCP = (data)=>{
    console.log('Sending to GCP, ',data)
}

const sendToBA = (data)=>{
    console.log('Sending to BA, ',data)
}

const sendEmail = (data)=>{
    console.log('Sending email with data-> , ',data)
}

observer.subscribe(sendToGCP)
observer.subscribe(sendToBA)
observer.subscribe(sendEmail)


observer.unsubscribe(()=>{})


