
//-------this is controller for mentors ----------//

class mentorController {

    //---------this is get-mentor controller function --------//

    async getMentors(request, response, next) {

        try {
            response.send("this is working");
        }
        catch (error) {
            next(error);
        }
    }

    //-----------this add mentor to db in mentors collection -------//

    async addMentors(request, response, next) {
        const {name, domain, experience, contact} = request.body;
        try {
            response.send("this is working");
        }
        catch (error) {
            next(error);
        }
    }
}


export default new mentorController();