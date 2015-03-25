for f in *.php; do 
	mv -- "$f" "${f%.php}.html"
done
