FROM python:3.10

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /mep_site

# Set the working directory to /music_service
WORKDIR /mep_site

# Copy the current directory contents into the container at /music_service
ADD . /mep_site/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt