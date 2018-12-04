## DEPRECATED DOC- This extension has been re-designed to focus on providing a great experience working with the Azure Machine Learning service. Please check out the latest doc in the [parent folder](..).
# View Deep learning document with VS Code
VS Code Tools for AI is shipped with document for some common deep learning frameworks. You can manage and browse the document in VS Code and search for API reference within editor window through simple command.

## Manage the document
- Press **Ctrl+Shift+P** to activate the command palette
- Enter **AI: doc** to execute the command
- A new "Documentation Viewer" window will be opened with VS Code.

  ![docviewer-manage](/docs/media/docviewer/docviewer-manage.png)

- The left panel contains a search box and the title of content

- The right panel contains a list of available documentation
  
  - Click "Install" to download and install the documentation from Internet.
  
  - Click "Uninstall" if you want to remove the documentation from local storage.

> [!NOTE]
> Once the download/installation is finished, please press "Refresh" button to refresh the document status.

> [!TIPS]
> if the window size is small, you may want to hide the left panel to get more space for document content. Click the button on the bottom to show/hide the left panel.
  

## Browse the document
Click the title of content in the left panel, you can browse any installed document like this:

  ![docviewer-browse](/docs/media/docviewer/docviewer-browse.png)

> [!TIPS]
> Hover the mouse over the API definition part, you will see a floating "Click to copy" button. Click it and copy the API definition to clipboard, then you can easily use it in your code.

## Search for API reference
To search for API reference, you have two approaches:

### 1. Search Box
- Open the Documentation Viewer window
- Locate the Search box on the top of left panel
- Type any keyword to search for API reference
- Click an entry in the search result to see the details

  ![docviewer-searchbox](/docs/media/docviewer/docviewer-searchbox.png)

### 2. Context menu
- Open a python file in the editor window
- Locate the function you are interested in and move the cursor there
- Right click the mouse and choose **Search in document viewer** command, 
- Or Press **Ctrl+Shift+I** to execute the command
- Search result will be listed in the documentation viewer window

  ![docviewer-search-context](/docs/media/docviewer/docviewer-search-context.png)
