=begin
	The prime factors of 13195 are 5, 7, 13 and 29.
	
	What is the largest prime factor of the number 600851475143 ?
=end


def prime_factors number, factors
	i = 2	

	while i < number

		if number % i == 0
				factors.push i
				number /= i
		end
		i += 1
	end
	factors.push number
	factors
end

factors = []
factors = prime_factors 600851475143, factors
puts factors.max
