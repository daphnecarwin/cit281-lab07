
class CustomError extends Error {
    //initialize the class
    constructor(args){
        super(args);
        this.message = 'Custom error';
    }
    
    
    throwGenericError(){
        throw new Error("Generic error");
    }
    //
    throwCustomError(){
        throw new CustomError().message;
    }
}        
    //initialize a CustomError obj
    const myError = new CustomError();

    //a try...catch...finally block using the generic error
    console.log("Force generic error");
    try{
        console.log("Generic error try block");
        myError.throwGenericError();
    } catch {
        console.log("Generic error catch block");
        console.log(myError.throwGenericError());
    } finally {
        console.log("Generic error finally block");
    }
    
    //a try...catch...finally block using the custom error
    console.log("Force custom error");
    try{
        console.log("Custom error try block");
        myError.throwGCustomError();
    } catch {
        console.log("Custom error catch block");
        console.log(myError.throwCustomError());
    } finally {
        console.log("Custom error finally block");
    }