
export default class Informations{
    // class holding the data 
    constructor(Title,Image,Text,Question,Answer,uAnswer ='' ){
        this.Title = Title
        this.Image = Image
        this.Text = Text
        this.Question = Question
        this.Answer = Answer
        this.uAnswer = uAnswer
    }
    updateAnswer(newAnswer) {
        this.uAnswer = newAnswer;
        
    }
    Check (){
        let uAnswer = this.uAnswer
        let Answer = this.Answer
        let temp = uAnswer.toLowerCase().trim()
        uAnswer = temp
        temp = Answer.toLowerCase().trim()
        Answer = temp
        console.log(uAnswer)
        return (uAnswer == Answer)
        
        console.assert("number" == Answer, "Error");
        console.assert("Number   " == Answer , "Error");
        
    }


}
