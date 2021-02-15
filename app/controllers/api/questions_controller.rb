class Api::QuestionsController < ApplicationController
  def create
    byebug
    @question = Question.new(question_params)

    if @question.save
      if create_snippets_from_params
        render json: { question: @question, snippets: @question.snippets }
      else
        render_error("Failed to create snippets", @question.snippets)
      end
    else
      render_error("Failed to create question", [@question])
    end
  end

  private

  def question_params
    params.require(:question).permit(:user_id, :description)
  end

  def snippets_params
    params.require(:question).permit(snippets: [:rich_text, :user_id, :question_id])
  end

  def create_snippets_from_params
    snippets = snippets_params[:snippets]
    results = snippets.map { |s| @question.snippets.create(s) }
    results.none?(&:nil?)
  end

  def render_error(message, models)
    render json: {
      message: message,
      errors:  models.map(&:errors).flat_map(&:full_messages),
      question: @question
    }, status: 500
  end
end