//----- this is auth controller this has sign-up , sign in, logout all these --------//

import authService from "../services/auth.service.js";

class authController {
    //-----sign up function ------//
    async signUp(request, response, next) {

        const { name, email, password } = request.body;
        try {
            const newUser = await authService.createuser(name, email, password);
            return response.status(200).send({ message: "You can login now" });
        }
        catch (error) {
            next(error);
        }
    }
    async login(request, response, next) {
        const { email, password } = request.body;
        try {
            const user = await authService.login(email, password);
            if (user) {
                const loginToken = await authService.userToken(user);
                const usertoken = loginToken;
                user.password = undefined;
                user._id = undefined
                return response.cookie('logintoken', usertoken, {}).json('ok');
            } else {
                return response.status(404).send({
                    message: "Invalid credentials",
                });
            }
            // if (user) {
            //     const loginToken = await authService.userToken(user);
            //     const usertoken = loginToken;
            //     user.password = undefined;
            //     return response.cookie('logintoken', usertoken, {
            //         expires: new Date(Date.now() + 2589000000),
            //         httpOnly: true,
            //         sameSite: "none", // Allows cross-site cookies
            //         secure: false,     // Ensures cookies are sent only over HTTPS
            //     }).json({ data: user });
            // } else {
            //     return response.status(404).send({
            //         message: "Invalid credentials",
            //     });
            // }
        } catch (error) {
            next(error); // Passes the error to an error-handling middleware
        }
    }

    async profilecheck(request, response, next) {
        const { logintoken } = request.cookies;
        try {
            const info = await authService.tokenverify(logintoken);
            return response.json(info);
        } catch (error) {
            console.error("Error in profile handler:", error);
            next(error); // Pass the error to the next middleware
        }
    }

}
export default new authController();