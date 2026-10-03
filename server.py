import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    global PORT
    for port_attempt in [8000, 8080, 5000, 3000, 8888]:
        try:
            with socketserver.TCPServer(("", port_attempt), Handler) as httpd:
                PORT = port_attempt
                url = f"http://localhost:{PORT}"
                print("=" * 65)
                print("  MEDIA PEMBELAJARAN INTERAKTIF: SISTEM OPERASI (KELAS XI SMA)")
                print("=" * 65)
                print(f"  Server berjalan di: {url}")
                print("  Membuka peramban browser otomatis...")
                print("  Tekan Ctrl+C di terminal ini untuk menghentikan server.")
                print("=" * 65)
                webbrowser.open(url)
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == "__main__":
    start_server()
