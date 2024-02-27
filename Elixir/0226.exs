defmodule Greetings do
  def hello(name), do: "Hello, " <> name
end

IO.puts Greetings.hello("Sean")