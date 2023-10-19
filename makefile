compose = @docker-compose

start:
	${compose} up -d

stop:
	${compose} down --volumes --remove-orphans

bot-sh:
	${compose} exec bot bash
