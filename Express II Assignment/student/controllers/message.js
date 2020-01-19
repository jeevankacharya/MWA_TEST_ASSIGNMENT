const deleteMessage = [{ id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95 }]
const deleteSuccessMessage = function(req,res,next){
    
    res.json(deleteMessage)
}

const deleteFailureMessage = function (req,res,next){
    
}