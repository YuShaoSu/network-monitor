import re

def gen_nodes():
    nodes = []
    with open('map', 'r') as f:
        for line in f.readlines():
            print(line)
            ip = re.findall( r'[0-9]+(?:\.[0-9]+){3}', line)
            print(ip)
            nodes.append(ip[0].split('.')[3])
    print(nodes)
    return nodes

if __name__ == "__main__":
    gen_nodes()