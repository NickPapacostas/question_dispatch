u = User.create(email: "test@test.com", password: "asdf", password_confirmation: "asdf")
shift = Shift.create(user: User.first)
student = Student.create(email: "st@test.com")
m = Message.create(sender: User.first)
