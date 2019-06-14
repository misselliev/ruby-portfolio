# frozen_string_literal: true

class PagesController < ApplicationController
  def welcome; end

  def portfolio
    render 'portfolio'
  end

  def about
    render 'about'
  end
end
