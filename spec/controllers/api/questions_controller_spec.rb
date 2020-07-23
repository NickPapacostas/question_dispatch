require 'rails_helper'

RSpec.describe "Question Creation", type: :request do
  let!(:user) { User.create!(email: "test@test.com", password: '1234', password_confirmation: '1234') }

  it "creates a Question and renders it as json" do
    post "/api/questions.json", params: {
      question: {
        user_id: user.id,
        description: "Test description",
        snippets: [
          {
            rich_text: "hello",
            user_id: user.id
          },
          {
            rich_text: "there",
            user_id: user.id
          }
        ]
      }
    }

    question = Question.last
    expect(question).to_not be nil
    expect(question.state).to eq('initial_queue')

    snippets = question.reload.snippets

    expect(snippets.length).to eq(2)
    expect(snippets.first.rich_text).to eq('hello')
    expect(snippets.last.rich_text).to eq('there')
    expect(response.status).to eq(200)
  end
end