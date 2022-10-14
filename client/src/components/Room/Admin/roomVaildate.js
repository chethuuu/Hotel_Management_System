export const Validateroom=(formData) =>{
    const messages ={
       NAME :"The Room Name should at least be 3 letters...!",
       FEATURES : " The Features should at least be 10 letters...!",
       DESCRIPTION : "The Description should at least be 20 letters...!"
    };
    const output ={
            status : false,
            message : null
    };

    if(formData.name.length <= 2 )
    {
        output.message = messages.NAME;
        output.status = false;
        return output;
    }
    if(formData.features.length <= 10)
    {
        output.message = messages.FEATURES;
        output.status = false;
        return output;
    } 
    if(formData.description.length <= 20)
    {
        output.message = messages.DESCRIPTION;
        output.status = false;
        return output;
    } 
    else
    {
        output.status = true;
        return output;
    }
};