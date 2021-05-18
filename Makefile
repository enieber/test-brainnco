dev-up:
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.dev.yml up --build

test:
	docker-compose -f docker-compose.dev.yml run --rm app npm test

test-watch:
	docker-compose -f docker-compose.dev.yml run --rm app npm run test:watch

up:
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build


