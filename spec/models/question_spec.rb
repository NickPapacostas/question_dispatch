require 'rails_helper'

RSpec.describe 'Question' do
  context 'when being created' do
    let(:user) { User.create(email: "test@test.com")}

    it 'requires a user_id' do
      expect { Question.create! }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'defaults to the :initial_queue state' do
      expect(Question.create(user: user).state).to eq('initial_queue')
    end
  end
end