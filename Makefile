all:
	babel lib --out-dir dist
	lessc lib/switch.less > dist/switch.css
clean:
	rm dist/*
