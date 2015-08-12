all:
	babel lib --out-dir dist
	lessc lib/switch.less > dist/switch.css
	webpack -p
clean:
	rm dist/*
	rm example/bundle*
