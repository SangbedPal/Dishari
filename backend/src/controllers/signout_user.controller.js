function signoutUser(req, res) {
    res.cookie("token", "");
    res.status(200);
}

export default signoutUser;