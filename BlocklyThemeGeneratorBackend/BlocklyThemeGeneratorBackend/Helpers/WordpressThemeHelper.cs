using System.IO;

namespace BlocklyThemeGeneratorBackend.Helpers
{
    public interface IWordpressThemeHelper
    {
        void UpdateThemeAsync(string title, string content);
    }

    public class WordpressThemeHelper : IWordpressThemeHelper
    {
        private const string PathToWordpressTheme = @"C:\xampp\htdocs\testsite\wp-content\themes\demotheme\";
        
        public void UpdateThemeAsync(string title, string content)
        {
            var fileToUpdate = PathToWordpressTheme + title;
            
            File.WriteAllText(fileToUpdate, content);
        }
    }
}