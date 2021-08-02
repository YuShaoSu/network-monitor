# import socket

# HOST = '0.0.0.0'
# PORT = 7000

# s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
# s.bind((HOST, PORT))
# s.listen(5)

# print('server start at: %s:%s' % (HOST, PORT))
# print('wait for connection...')

# while True:
#     conn, addr = s.accept()
#     print('connected by ' + str(addr))

#     while True:
#         indata = conn.recv(1024)
#         if len(indata) == 0: # connection closed
#             conn.close()
#             print('client closed connection.')
#             break
#         print('recv: ' + indata.decode())

#         outdata = 'echo ' + indata.decode()
#         conn.send(outdata.encode())

from subprocess import Popen, PIPE, STDOUT

def iperf(host):
    proc = Popen('iperf3 -c {} -b0 -t0 --forceflush'.format(host), stdout = PIPE, 
    stderr = STDOUT, shell = True)

    while True:
      line = proc.stdout.readline().rstrip().decode("utf-8")
      if not line: break
      if line == '' or 'bits/sec' not in line:
            continue
    #   print(line)
    #   print('--------------')
    #   print(line.split()[6])
      yield line.split()[6]



if __name__ == '__main__':
    # from shelljob import proc
    # g = proc.Group()
    # p = g.run('iperf3 -c 192.168.1.145 -b0 -t0')
    # while g.is_pending():
    #     lines = g.readlines()
    #     for proc, line in lines:
    #         print(line)
    #         # send(line)
    #         # send(line, namespace='/stream')

    # result = subprocess.run(['ls', '-l'], stdout=subprocess.PIPE)
    proc = Popen('iperf3 -c 192.168.1.145 -b0 -t0 --forceflush', stdout = PIPE, 
        stderr = STDOUT, shell = True)

    # for line in proc.stdout: 
    #     print(line.decode(), end='')

    while True:
    #   outs, errs = proc.communicate()
    #   print(outs)
      line = proc.stdout.readline().rstrip().decode("utf-8")
      if not line: break
      if line == '' or 'Mbits/sec' not in line:
            continue
      for l in line.split():
          print(l)
      print('--------------')
      print(line.split()[6])

    #   print(line.strip(), flush=True)
    # for line in iter(proc.stdout.readline):
