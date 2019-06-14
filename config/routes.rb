# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#welcome'
  get 'portfolio', to: 'pages#portfolio'
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'
end
