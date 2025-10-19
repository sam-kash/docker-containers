# Node Demo Project - Docker Commands

## Pull the Docker Image

To download the image from Docker Hub to your local machine:
```bash
docker pull sankalpa101/node-demo-proj
```

## Run the Container

To run the container with port mapping:
```bash
docker run -p 3000:3000 sankalpa101/node-demo-proj
```

This maps port 3000 of the container to port 3000 on your local machine.

## Verify the Image

To check if the image is available in your local image list:
```bash
docker images
```

You should see `sankalpa101/node-demo-proj` in the output list.

---

## Quick Start

If you want to run the application directly without pulling first:
```bash
docker run -p 3000:3000 sankalpa101/node-demo-proj
```

Docker will automatically pull the image if it's not already available locally.
