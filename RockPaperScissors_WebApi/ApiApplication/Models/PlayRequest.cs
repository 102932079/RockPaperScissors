// see api requirements for naming
using System.Text.Json.Serialization;

namespace RPS_WebApi
{
    public class PlayRequest
    {
        //Specifies the property name that is present in the JSON when serializing and deserializing. This overrides any naming policy specified by JsonNamingPolicy.
        [JsonPropertyName("PlayerChoice")]
        public string PlayerChoice {get; set;} 

        public PlayRequest(){}
    }
}