import { RoutesInput } from "../types/types";
import userController from "../controllers/user.controller";

export default({app}: RoutesInput) => {
    app.post("/api/user", async(req, res) => {
        console.log('Test url');
        const user = await userController.createUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })

        return res.send({user});
    })
}

