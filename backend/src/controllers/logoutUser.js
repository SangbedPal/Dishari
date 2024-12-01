function logoutUser(req, res) {
    res.cookie("token", "");
    res.status(200);
}

export default logoutUser;