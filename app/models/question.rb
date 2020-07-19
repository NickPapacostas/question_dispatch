class Question < ApplicationRecord
  include AASM

  belongs_to :user
  has_many :snippets, -> { order(:id) }, dependent: :destroy

  accepts_nested_attributes_for :snippets, allow_destroy: true

  aasm do
    state :initial_queue, initial: true
    state :with_dispatch
    state :coaches_queue
    state :with_coach
    state :inactive

    # example transition:
    #
    # event :sleep do
    #   transitions from: :running, to: :sleeping
    # end
  end

  def state
    aasm_state
  end
end