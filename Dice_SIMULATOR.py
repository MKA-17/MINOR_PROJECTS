import random as rand
possible_events = [1,2,3,4,5,6]

def generate():
     n = rand.choice(possible_events)

     if n == 1 :
        print(" -------")
        print("|       |")
        print("|   o   |")
        print("|       |")
        print(" -------")
     elif n == 2 :
        print(" -------")
        print("|       |")
        print("|  o o  |")
        print("|       |")
        print(" -------")
     elif n == 3 :
        print(" -------")
        print("|       |")
        print("| o o o |")
        print("|       |")
        print(" -------")
     elif n == 4 :
        print(" -------")
        print("|  o o  |")
        print("|       |")
        print("|  o o  |")
        print(" -------")
     elif n == 5 :
        print(" -------")
        print("|   o   |")
        print("| o o o |")
        print("|   o   |")
        print(" -------")
    
     elif n == 6 :
        print(" -------")
        print("| o o o |")
        print("| o o o |")
        print("| o o o |")
        print(" -------")





print(generate())

