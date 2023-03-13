import PIL
from PIL import Image

mywidth=3060
myheight=2100

# This is to resize image

img = Image.open('light__image2.jpg')
img = img.resize((mywidth, myheight), PIL.Image.ANTIALIAS)
img.save('resize_Slide__3a.jpg')

