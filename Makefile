include .env

.PHONY: up

up:
		docker-compose up -d

.PHONY: down

down:
		docker-compose down

.PHONY: build

build:
		docker-compose build

.PHONY: up_prod

up_prod:
		docker-compose -f docker-compose.yml -f docker-production.yml up -d

.PHONY: logs

logs:
		docker-compose logs -f