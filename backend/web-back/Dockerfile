FROM golang:1.20.4-bullseye

# ENV CGO_ENABLED=0
# ARG GOOS=linux
# ARG GOARCH=amd64

# WORKDIR /go/src/api
# COPY api/ ./

# # airのインストール
# RUN go install github.com/cosmtrek/air@latest

# # echoとmiddlewareのインストール
# RUN go get -u github.com/labstack/echo/v4
# RUN go get -u github.com/labstack/echo/v4/middleware

# WORKDIR /go/src/api


ENV TZ /usr/share/zoneinfo/Asia/Tokyo

ENV ROOT=/go/src/api
WORKDIR ${ROOT}

ENV GO111MODULE=on

COPY . .

RUN go install github.com/cosmtrek/air@latest

