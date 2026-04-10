import os
import re

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match HTML comments like <!-- ... -->
    content = re.sub(r'^[ \t]*<!--[\s\S]*?-->\n?', '', content, flags=re.MULTILINE)
    
    # Match CSS / standard block comments like /* ... */
    # but be careful not to remove inline comments if they are not at the start of the line
    # Actually my comments are usually preceded by blanks
    content = re.sub(r'^[ \t]*/\*[\s\S]*?\*/\n?', '', content, flags=re.MULTILINE)
    
    # Match JS single line comments (but skip lines like https://)
    # Match // at the beginning of the line (with optional spaces)
    content = re.sub(r'^[ \t]*//.*?\n', '', content, flags=re.MULTILINE)

    # Normalize empty lines (max 1 empty line consecutive)
    content = re.sub(r'\n{3,}', '\n\n', content)

    # One last pass to remove inline comments that are alone
    # (some // comments might not end with \n if at EOF)
    content = re.sub(r'^[ \t]*//.*?$', '', content, flags=re.MULTILINE)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = './src'
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(('.vue', '.js', '.css')):
            clean_file(os.path.join(root, file))

print("Comments cleaned!")
