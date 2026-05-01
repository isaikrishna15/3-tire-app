FROM node:18
WORKDIR /app
COPY . .
RUN npm install express mongoose
EXPOSE 5000
CMD ["node", "app.js"]