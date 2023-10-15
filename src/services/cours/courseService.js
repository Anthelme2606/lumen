const CoursRepository = require('../../repositories/cours/coursRepository');
const UserRepository=require("../../repositories/users/userRepository");
class CoursService {
static async create(data)

{
    return await CoursRepository.create(data);
}
static async getUserById(userId)
{
return await UserRepository.getById(userId);
}
static async getAll() {
    return await CoursRepository.getAll();
}
static async delete(courseId) {
    return await CoursRepository.delete(courseId);
}
static async update(id,data) {
    return await CoursRepository.update(id,data);
}
static async getSingle(id)
{
    return await CoursRepository.getSingle(id);
}
}
module.exports= CoursService ;
