# dump the conn map from the prplmesh controller to a file
echo "bml_conn_map" | docker exec -i controller bash -c '$INSTALL_DIR/bin/beerocks_cli' | grep ipv4 > map