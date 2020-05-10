class QuestionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "question"
  end

  def receive(data)
    ActionCable.server.broadcast("question", data)
  end
end