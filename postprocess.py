import os

def main():
    secure_html_path = os.path.join("dist", "secure.html")

    with open(secure_html_path, 'r') as file:
        content = file.read()

    content = content.replace("This page is password protected.", "Restrict to URFO Musicians and Staff Members only.")
    content = content.replace("Protected Page", "URFO Internal Portal")
    content = content.replace("background:#000;", "background:#b20000;")

    with open(secure_html_path, 'w') as file:
        file.write(content)

    print(f"Successfully processed {secure_html_path}")

if __name__ == "__main__":
    main()