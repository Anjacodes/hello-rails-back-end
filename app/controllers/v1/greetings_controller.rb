class V1::GreetingsController < ApplicationController
  def hello
    rand_num = rand(Greeting.count) + 1
    greeting = Greeting.find(rand_num)
    render json: { message: greeting.message }
  end
end
