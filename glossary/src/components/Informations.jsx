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
        console.log(this.uAnswer)
    }
    Check (){
        let uAnswer = this.uAnswer.toLowerCase();
        let Answer = this.Answer.toLowerCase();
        return (uAnswer == Answer)

    }


}
