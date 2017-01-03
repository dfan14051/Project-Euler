=begin
	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
	The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
=end

def summation limit
	sum = 0
	limit.times do |i|
		sum += i
	end
	sum += limit
	sum
end

three = 3 * summation(999 / 3)
five = 5 * summation(999 / 5)
fifteen = 15 * summation(999 / 15)

puts (three + five - fifteen)