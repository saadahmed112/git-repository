import math
def get_area(radius):
    return math.pi *radius *radius

def output_parameter(radius):
    parameter= 2* math.pi* radius 
    print(f"The parameter of the circle with radius {radius} is {parameter:.7f}")




print("The area of the circle is:", get_area(1.999))
output_parameter(1.999)

