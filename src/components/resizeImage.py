import PIL
from PIL import Image

mywidth=2660
myheight=1900

# This is to resize image

img = Image.open('Slide__3.jpg')
img = img.resize((mywidth, myheight), PIL.Image.ANTIALIAS)
img.save('resize_Slide__3.jpg')

